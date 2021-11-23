import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Question from './views/Question';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-hero-lg">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/questions" element={<Question />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;