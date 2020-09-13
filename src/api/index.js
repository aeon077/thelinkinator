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

export async function postNewLink({ url, comment, tags }) {
  try {
    const { data } = await axios.post(`${BASE_URL}/links`, {
      url,
      comment,
      tags
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateLink(linkId, { url, count, comment, tags }) {
  try {
    const { data } = await axios.patch(`${BASE_URL}/links/${linkId}`, {
      url,
      count,
      comment,
      tags
    });
    return data;
  } catch (error) {
    throw error;
  }
}