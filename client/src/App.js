import React from 'react';

import Layout from './components/Layout';
import Sample from './components/Sample';

function App() {
  return (
    <div className="App">
      <Layout>
        {/**
         * 아래 샘플은 지우셔도 됩니다.
         */}
        <Sample></Sample>
      </Layout>
    </div>
  );
}

export default App;
