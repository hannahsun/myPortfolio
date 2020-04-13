import React from 'react';
import logo from './assets/logo.svg';
import './style/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//constant components
import Navigation from './components/navComponent/navigation.js';
import Footer from './components/footerComponent/footer.js';
//page components
import Thumbs from './components/pages/thumbs.js';
import About from './components/pages/about.js';

function App() {
  return (
    <Router>
    <div className="App">
       <Navigation />
          <Route exact path='/' component={Thumbs}></Route>
          <Route exact path='/about' component={About}></Route>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
