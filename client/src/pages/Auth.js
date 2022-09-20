import React from 'react';
import styled from '@emotion/styled';

import { TextField, Button } from '@mui/material/';


function Auth() {
  return (
    <Container>
        <img src='https://www.fint.co.kr/static/imgs/logo-fint.57a4d0a6.svg' />
        
        <TextField id="standard-basic" label="아이디" variant="standard" />
        <TextField id="standard-basic" label="비밀번호" variant="standard" />
        <Button variant="contained">로그인</Button>
    </Container>
  )
}

export default Auth;

const Container = styled.div`
  width: 300px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 80px;
    margin: 0 auto;
  }
`