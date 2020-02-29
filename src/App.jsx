import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';

export default function App() {
  return (
    <Router>
      <Welcome />
    </Router>
  );
}
