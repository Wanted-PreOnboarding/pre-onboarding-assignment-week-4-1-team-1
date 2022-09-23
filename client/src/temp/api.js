//사용사 상세 페이지 구현을 위한 임시 api 연결 파일입니다. 제출 전에 지우겠습니다.

import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld2ZhY2VAZGNvLmNvbSIsImlhdCI6MTY2MzkyMTAxMiwiZXhwIjoxNjYzOTI0NjEyLCJzdWIiOiIxMDEifQ.o-6X-7Sj6V_xS5eAOF0S_87nyXWsPEF-k6Ujp8QrLgU';

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

async function getUserSetting(uuid) {
  try {
    const { data } = await axios.get(`/users/?uuid=${uuid}`, {
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

export { getUsers, getUser, getUserSetting, getAccounts, getAccount };
