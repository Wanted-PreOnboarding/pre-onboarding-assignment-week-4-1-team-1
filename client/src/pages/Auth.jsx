import React, { useState } from 'react';
import styled from '@emotion/styled';

import { TextField, Button } from '@mui/material/';
import api from '../api/auth/auth';
import { setToken } from '../utils/token';

function Auth() {
  const [email, setEmail] = useState('');
  const onEmailHandler = e => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const onPasswordHandler = e => {
    setPassword(e.target.value);
  };

  const onLoginHandler = async e => {
    e.preventDefault();
    try {
      const res = await api.login(email, password);

      setToken(res.data.accessToken);
      alert('로그인에 성공하였습니다.')
      window.location.reload();
    } catch (error) {
      alert('로그인에 실패하였습니다.');
    }
  };

  return (
    <Container>
      <img src="https://www.fint.co.kr/static/imgs/logo-fint.57a4d0a6.svg" />

      <form onSubmit={onLoginHandler}>
        <TextField
          id="standard-basic"
          label="아이디"
          variant="standard"
          type="email"
          value={email}
          onChange={onEmailHandler}
        />
        <TextField
          id="standard-basic"
          label="비밀번호"
          variant="standard"
          type="password"
          value={password}
          onChange={onPasswordHandler}
        />
        <Button variant="contained" type="submit">
          로그인
        </Button>
      </form>
    </Container>
  );
}

export default Auth;

const Container = styled.div`
  width: 400px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 20px;
  box-shadow: 1px 1px 20px 1px #ddd;

  img {
    width: 80px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
