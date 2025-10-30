from pydantic import BaseModel

class SummarizeRequest(BaseModel):
    text: str

class BatchSummarizeRequest(BaseModel):
    texts: list[str]
