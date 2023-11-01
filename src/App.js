import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Menu from './components/Menu';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />

      </Routes>
    </Router>
  );
}


export default App;
