import React, { useState } from 'react';
import styled from '@emotion/styled';

import { TextField, Button } from '@mui/material/';
import api from '../api/auth/auth';

function Auth() {
  const [email, setEmail] = useState('');
  const onEmailHandler = e => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const onPasswordHandler = e => {
    setPassword(e.target.value);
  };

  const onSubmitAuth = async e => {
    e.preventDefault();
    const res = await api.login(email, password);
  };

  return (
    <Container>
      <img src="https://www.fint.co.kr/static/imgs/logo-fint.57a4d0a6.svg" />

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

      <form onSubmit={onSubmitAuth}>
        <Button variant="contained" type="submit">
          로그인
        </Button>
      </form>
    </Container>
  );
}

export default Auth;

const Container = styled.div`
  width: 300px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 20px;
  box-shadow: 1px 1px 20px 1px #ddd;

  img {
    width: 80px;
    margin: 0 auto;
  }

  Button {
    width: 100%;
  }
`;
