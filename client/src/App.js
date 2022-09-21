import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';

import Layout from './components/Layout';
import Sample from './components/Sample';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
=======
      <Layout>
        {/**
         * 아래 샘플은 지우셔도 됩니다.
         */}
        <Sample></Sample>
      </Layout>
>>>>>>> cd5d7495fb6deb76d0b77524223714ffd906b939
    </div>
  );
}

export default App;
