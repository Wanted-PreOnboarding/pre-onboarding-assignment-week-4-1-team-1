import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Layout from './components/Layout';
// import Sample from './components/Sample';
import Home from './pages/Home';

import { getToken } from './utils/token';

function App() {
  return (
    <div className="App">
      {getToken()
        ? <Layout>
            <Routes>
              <Route path='/' element={<Home />}/>
            </Routes>
          </Layout>
        : <Auth />
      }
    </div>
  );
}

export default App;
