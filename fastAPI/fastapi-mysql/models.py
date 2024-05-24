from sqlalchemy import Boolean, Column, Integer, String

from database import Base

#defining model for the tables in the db
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True)

class Post(Base):
    __tablename__ ='posts'

    id= Column(Integer, primary_key= True, index=True)
    title = Column(String(50))
    content = Column(String(100))
    user_id = Column(Integer)