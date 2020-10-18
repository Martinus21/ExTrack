import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// IMPORT MAIN
import Main from './pages';

function App() {
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  );
}

export default App;
