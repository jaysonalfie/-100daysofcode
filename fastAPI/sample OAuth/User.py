from pydantic import BaseModel
import datetime

class User(BaseModel):
    username: str
    password: str

class ActiveSession(BaseModel):
    username: str
    access_token: str
    expiry_time: datetime.datetime