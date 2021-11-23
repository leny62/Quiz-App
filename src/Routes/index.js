import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../views/Home';

function index() {
  return (
    <Router>
    <div>
    <Routes>
          <Route exact path="/" component={Home} />
    </Routes>
    </div>
    </Router>
  );
}

export default index;