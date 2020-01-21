import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/Header';
import CreateReview from './pages/CreateReview';
import IndexPage from './pages/Landing';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={IndexPage}/>
        <Route path="/new" component={CreateReview} />
      </Router>
    </div>
  );
}

export default App;
