import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld2ZhY2VAZGNvLmNvbSIsImlhdCI6MTY2Mzc2MjI2OSwiZXhwIjoxNjYzNzY1ODY5LCJzdWIiOiIxMDIifQ.drH5igtiSqdohZTu0KZg1PfoNavcCN748s4qvIXBxco';

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
