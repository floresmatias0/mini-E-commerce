import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
