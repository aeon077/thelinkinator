import axios from 'axios';


export async function fetchUrls() {
  try {
    const { data } = await axios.get('/api');
    return data.links || [];
  } catch (error) {
    throw error;
  }
}