import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Layout from './components/Layout';
import Sample from './components/Sample';
import UserDetails from './pages/UserDetail/UserDetails';
import UserList from './temp/UserList';

import { getToken } from './utils/token';

function App() {
  return (
    <div className="App">
      {getToken() ? (
        <Layout>
          <Routes>
            {/* 사용자 상세 리스트를 확인하기 위한 라우터입니다. 사용시 temp폴더에 있는 api파일에 token
            변수에 토큰을 넣어서 사용하시면 됩니다. */}
            {/* <Route path="/" element={<UserList />} />
          <Route path="/users/details/:id" element={<UserDetails />} /> */}
            <Route path="/" element={<Sample />} />
          </Routes>
        </Layout>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
