import axios from 'axios';

const BASE_URL = '/api';

export async function fetchUrls() {

  try {
    const { data } = await axios.get(`${BASE_URL}/links`);
    console.log('hello')
    return data || [];
  } catch (error) {
    throw error;
  }
};

