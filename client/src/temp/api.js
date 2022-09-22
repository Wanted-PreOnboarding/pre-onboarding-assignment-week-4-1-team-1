import axios from 'axios';

const token = 'token';

async function getUsers() {
  try {
    const { data } = await axios.get('/users', {
      headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (e) {
    throw e;
  }
}

async function getUser(id) {
  try {
    const { data } = await axios.get(`/users/${id}`, {
      headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (e) {
    throw e;
  }
}

async function getAccounts() {
  try {
    const { data } = await axios.get(`/accounts`, {
      headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (e) {
    throw e;
  }
}

async function getAccount(user_id) {
  try {
    const { data } = await axios.get(`/accounts?user_id=${user_id}`, {
      headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (e) {
    throw e;
  }
}

export { getUsers, getUser, getAccounts, getAccount };
