from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

class Chat(BaseModel):
    id:str
    content:str
    
    
chats=[]
    
app = FastAPI()

@app.post("/chats")
def create_chat(chat:Chat):
    chats.append(chat)
    return '채팅 시작합니다'

@app.get("/chats")
def read_chat():
    return chats

app.mount("/", StaticFiles(directory="static", html=True), name="static")