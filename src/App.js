import React from 'react';
// import logo from './assets/logo.svg';
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
import motionThumbs from './components/pages/thumbs_mograph.js';
import graphicThumbs from './components/pages/thumbs_graphic.js';
import About from './components/pages/about.js';
//project page components
import projectTemplate from './components/project pages/projectTemplate.js';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="aboveFold">
       <Navigation />
        <Route exact path='/' component={motionThumbs}></Route>
        <Route exact path='/graphic' component={graphicThumbs}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/projectTemplate' component={projectTemplate}></Route>
        </div>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
