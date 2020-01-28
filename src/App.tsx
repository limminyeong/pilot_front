import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/Header';
import CreateReview from './pages/CreateReview';
import IndexPage from './pages/Main';
import Detail from './pages/Detail';
import UpdateReview from './pages/UpdateReview';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={IndexPage}/>
        <Route exact path="/review/:review_id" component={Detail} />
        <Route path="/reviews/new" component={CreateReview} />
        <Route path="/review/:review_id/edit" component={UpdateReview} />
      </Router>
    </div>
  );
}

export default App;
