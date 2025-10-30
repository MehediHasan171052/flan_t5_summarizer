from fastapi import FastAPI
from app.routers import summarize
from fastapi.middleware.cors import CORSMiddleware
import logging

logging.basicConfig(level=logging.INFO)

app = FastAPI(
    title="FLAN-T5 Summarization API",
    version="1.0.0",
    description="Text summarization using google/flan-t5-base"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(summarize.router)

@app.get("/")
def root():
    return {"message": "Welcome to FLAN-T5 Summarization API!"}
