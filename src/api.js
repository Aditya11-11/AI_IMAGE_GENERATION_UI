import axios from 'axios';

export const API_URL = 'https://image-generation-production.up.railway.app';

// export const generateImage = async (prompt) => {
//   try {
//     const response = await axios.post(`${API_URL}/text-to-image`, { prompt });
//     return response.data.image_url;
//   } catch (error) {
//     console.error("Error generating image:", error);
//     throw error;
//   }
// };
