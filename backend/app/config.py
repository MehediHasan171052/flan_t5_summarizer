import os
from dotenv import load_dotenv


load_dotenv()

class Settings:
    MODEL_NAME: str = os.getenv("MODEL_NAME", "google/flan-t5-base")
    MAX_INPUT_LENGTH: int = int(os.getenv("MAX_INPUT_LENGTH", 1024))
    MAX_SUMMARY_LENGTH: int = int(os.getenv("MAX_SUMMARY_LENGTH", 200))
    MIN_SUMMARY_LENGTH: int = int(os.getenv("MIN_SUMMARY_LENGTH", 50))

settings = Settings()