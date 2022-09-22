import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Users from './pages/Users/Users';
import Layout from './components/Layout';

import UserDetails from './pages/UserDetail/UserDetails';
import UserList from './temp/UserList';

import { getToken } from './utils/token';

function App() {
  return (
    <div className="App">
      {getToken() ? (
        <Layout>
          <Routes>
            <Route path="/users" element={<Users />} />
            {/* 사용자 상세 리스트를 확인하기 위한 라우터입니다. 
            사용시 먼저 아래 라우터 주석을 풀고 temp폴더 안에 api파일에 token
            변수에 토큰을 넣어서 사용하시면 루트 경로에 사용자 리스트가 나오고 클릭하면 사용자 상세 페이지로 갈 수 있습니다. */}
            {/* <Route path="/" element={<UserList />} />
          <Route path="/users/details/:id" element={<UserDetails />} /> */}
          </Routes>
        </Layout>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
