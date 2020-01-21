import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import { Header } from './components/Header';
import CreateReview from './pages/CreateReview';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Landing}/>
        <Route path="/new" component={CreateReview} />
      </Router>
    </div>
  );
}

export default App;
