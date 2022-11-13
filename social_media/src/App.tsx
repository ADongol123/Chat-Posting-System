import React from 'react';
import { BrowserRouter as  Router } from 'react-router-dom';
import './App.css';
import FileRoutes from './routes/FileRoutes';

function App() {
  return (
    <Router>
        <FileRoutes/>
    </Router>
  );
}

export default App;
