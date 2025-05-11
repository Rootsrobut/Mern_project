import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <h1>Welcome to the App</h1>
      <p>This is a simple authentication app using React.</p>
    </div>
  );
}
export default App;

