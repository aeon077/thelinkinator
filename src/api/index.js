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
    console.log("RIGHT BEFORE TAKEOFF:", url, comment, tags);
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

// async function postNewPost(
//   title,
//   description,
//   price,
//   location,
//   willDeliver,
//   endpointURL
// ) {
//   try {
//     const response = await fetch(endpointURL, {
//       method: "POST",
//       body: JSON.stringify({
//         post: {
//           title,
//           description,
//           price,
//           location,
//           willDeliver,
//         },
//       }),
//       headers: makeHeaders(),
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// function makeHeaders() {
//   if (userToken) {
//     return {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${userToken}`,
//     };
//   } else {
//     return {
//       "Content-Type": "application/json",
//     };
//   }
// }