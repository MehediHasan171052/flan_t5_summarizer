from fastapi import APIRouter
from pydantic import BaseModel
from app.models.summarizer_model import SummarizerModel

router = APIRouter()
model = SummarizerModel()

class TextRequest(BaseModel):
    text: str

@router.post("/summarize/")
async def summarize_text(request: TextRequest):
    try:
        result = model.summarize_text(request.text)
        return {"summary": result}
    except Exception as e:
        print("Error:", e)
        return {"summary": ""}
