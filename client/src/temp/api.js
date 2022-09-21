import axios from 'axios';

async function getUsers() {
  try {
    const res = await axios.get('/users', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (e) {
    throw e;
  }
}

// async function getUser(user_id) {
//   try {
//     const { data } = await apiInstance.get(`/users/${user_id}`);
//     return data;
//   } catch (e) {
//     throw e;
//   }
// }

export { getUsers };
