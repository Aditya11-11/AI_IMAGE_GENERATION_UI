import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const generateImage = async (prompt) => {
  try {
    const response = await axios.post(`${API_URL}/generate-image`, { prompt });
    return response.data.image_url;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
