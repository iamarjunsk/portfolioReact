import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './component/About/About';
import Projetcs from './component/Projects/Projetcs';
import Admin from './component/Admin/Admin';
import ScMedia from './component/ScMedia/ScMedia';
import Notes from './component/Notes/Notes';

function App() {

  return (
    <Router>
      <Header/>
      <Route path='/' exact component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projetcs}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/SocialMedia' component={ScMedia}/>
      <Route path='/notes' component={Notes}/>
    </Router>
 
  );
}

export default App;
