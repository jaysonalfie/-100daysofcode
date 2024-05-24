from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



URL_DATBASE = 'mysql+pymysql://root:root@localhost:3306/blogapplication'

engine = create_engine(URL_DATBASE)

SessionLocal = SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()