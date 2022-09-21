import React from 'react';
// import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Layout from './components/Layout';
import Sample from './components/Sample';

// import { getAccessToken } from './utils/token';

function App() {
  return (
    <div className="App">
      <Auth />
      <Layout>
        {/**
         * 예시 파일 입니다
         * 이후 삭제할 예정입니다.
         */}
        <Sample />
      </Layout>
    </div>
  );
}

export default App;
