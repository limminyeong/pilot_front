import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" component={Landing}/>
      </Router>
    </div>
  );
}

export default App;
