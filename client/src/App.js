import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
