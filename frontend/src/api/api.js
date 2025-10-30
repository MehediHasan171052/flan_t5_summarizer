import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const summarizeText = async (text) => {
  try {
    const res = await API.post("/summarize/", { text });
    return res.data.summary;
  } catch (error) {
    console.error("Error:", error);
    return "Error: Could not summarize text.";
  }
};
