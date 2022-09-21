import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Layout from './components/Layout';
import Sample from './components/Sample';
import UserDetails from './pages/UserDetail/UserDetails';
import UserList from './temp/UserList';

// import { getAccessToken } from './utils/token';

function App() {
  return (
    <div className="App">
      <Layout>
        {/**
         * 예시 파일 입니다
         * 이후 삭제할 예정입니다.
         */}

        <Sample />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/users/details/:id" element={<UserDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
