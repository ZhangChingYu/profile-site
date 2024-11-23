import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
