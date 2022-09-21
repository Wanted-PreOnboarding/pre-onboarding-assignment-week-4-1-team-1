import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Sample from './components/Sample';
import UserDetails from './pages/UserDetail/UserDetails';
import UserList from './temp/UserList';

function App() {
  return (
    <div className="App">
      <Layout>
        {/**
         * 아래 샘플은 지우셔도 됩니다.
         */}

        <Sample />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/details/:id" element={<UserDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
