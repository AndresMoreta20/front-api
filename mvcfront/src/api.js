import axios from "axios";

const API_URL = "http://localhost:8000/api/";

export const getLecturespaces = () => axios.get(`${API_URL}lecturespaces/`);
export const getFlashcards = () => axios.get(`${API_URL}flashcards/`);
export const getTags = () => axios.get(`${API_URL}tags/`);
export const startStudySession = (tagName) =>
  axios.post(`${API_URL}start-study-session/`, { tag_name: tagName });
export const postFlashcardFeedback = (sessionID, flashcardID, remembered) =>
  axios.post(`${API_URL}flashcard-feedback/${sessionID}/`, {
    flashcard_id: flashcardID,
    remembered,
  });
