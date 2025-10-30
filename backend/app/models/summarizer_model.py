import logging
import torch
from transformers import T5Tokenizer, T5ForConditionalGeneration
from app.config import settings

logger = logging.getLogger(__name__)


class SummarizerModel:
    def __init__(self):
        logger.info(f"Loading model: {settings.MODEL_NAME}")
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.tokenizer = T5Tokenizer.from_pretrained(settings.MODEL_NAME)
        self.model = T5ForConditionalGeneration.from_pretrained(
            settings.MODEL_NAME).to(self.device)

    def summarize_text(self, text: str) -> str:
        input_text = "summarize: " + text
        inputs = self.tokenizer.encode(
            input_text, return_tensors="pt",
            max_length=settings.MAX_INPUT_LENGTH,
            truncation=True
        ).to(self.device)

        outputs = self.model.generate(
            inputs,
            max_length=settings.MAX_SUMMARY_LENGTH,
            min_length=settings.MIN_SUMMARY_LENGTH,
            length_penalty=2.0,
            num_beams=4,
            early_stopping=True
        )
        summary = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        return summary

    def summarize_batch(self, texts: list[str]) -> list[str]:
        summaries = []
        for text in texts:
            try:
                summaries.append(self.summarize_text(text))
            except Exception as e:
                summaries.append(f"Error: {str(e)}")
        return summaries
