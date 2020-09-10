import axios from 'axios';

const BASE_URL = '/api';

export async function fetchLinks() {
  try {
    const { data } = await axios.get(`${BASE_URL}/links`);
    return data || [];
  } catch (error) {
    throw error;
  }
}

