import React from 'react';
// import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Layout from './components/Layout';

// import { getAccessToken } from './utils/token';

function App() {
  return (
    <div className="App">
      <Auth />
      <Layout>

      </Layout>
      
    </div>
  );
}

export default App;
