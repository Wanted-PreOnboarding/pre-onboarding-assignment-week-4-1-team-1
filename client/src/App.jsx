import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Users from './pages/Users/Users';
import Layout from './components/Layout';
import Sample from './components/Sample';
import UserDetails from './pages/UserDetail/UserDetails';
import UserList from './temp/UserList';

import { getToken } from './utils/token';

function App() {
  const token = getToken();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={token ? <Layout /> : <Auth />}>
          <Route index element={<UserList />} />
          <Route path="/users/customers" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/details/:id" element={<UserDetails />} />
          {/**
           * RTK Query의 예시를 위해서 Sample 컴포넌트를 라우트 해놓았습니다.
           */}
          <Route path="/sample" element={<Sample />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
