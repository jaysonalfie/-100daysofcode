from fastapi import FastAPI, HTTPException , Depends, status
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

#creating the pydantic models
#used for data validation
class PostBase(BaseModel):
    title:str
    content:str
    user_id:int

class UserBase(BaseModel):
    username:str


#creating dependancy for the db
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

#endpoint to create posts

@app.post("/posts/", status_code=status.HTTP_201_CREATED)
async def create_post(post: PostBase, db: Session = Depends(get_db)):
    db_post = models.Post(**post.dict())
    db.add(db_post)
    db.commit()

#endpoint to check only for one post in the db
@app.post("/posts/{post_id}",status_code=status.HTTP_200_OK)
async def read_post(post_id:int,db : Session = Depends(get_db)):
    post = db.query(models.Post).filter(models.Post.id== post_id).first()
    if post is None:
        HTTPException(status_code=404, detail='Post was not found')
    return post

#endpoit to delete post
@app.delete("/post/{post_id}", status_code=status.HTTP_200_OK)
async def delete_post(post_id:int, db: Session = Depends(get_db)):
    db_post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if db_post is None:
        HTTPException(status_code=404, detail='Post was not found')
    db.delete(db_post)
    db.commit()
    return db_post

#creating a new user in the database
@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserBase, db: Session = Depends(get_db)):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

#Creating endpoint to be able to fetch user
@app.get("/users/{user_id}", status_code=status.HTTP_200_OK)
#database is injected as a dependency using Depends()
async def read_user(user_id:int, db: Session = Depends(get_db)):
    
    #creates a query for the User model
    #filters the query to only include users whose id matches the provided one
    #retrieves the first result that matches the id
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404,detail='User not found')
    return user
