import React from 'react';
import { ReactReader } from 'react-reader';

const App = () => {
  const ebookUrl = './sample.epub';
  return (
    <div>
      <div style={{ position: 'relative', height: '80vh' }}>
      <ReactReader
        url={ ebookUrl} 
      />
      </div>
      <div style={{ marginTop: '20px', whiteSpace: 'pre-line' }}></div>
    </div>
  );
};

export default App;
