import React from 'react';
// import logo from './assets/logo.svg';
import './style/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//constant components
import Navigation from './components/elements/navigation.js';
import Footer from './components/elements/footer.js';

//page components
import motionThumbs from './components/pages/thumbs_mograph.js';
import graphicThumbs from './components/pages/thumbs_graphic.js';
import About from './components/pages/about.js';

//project page components
import proj_motionReel from './components/projectPages/proj_motionReel.js';
import proj_legion from './components/projectPages/proj_legion.js';
import proj_stillToLife from './components/projectPages/proj_stillToLife.js';
import proj_squares from './components/projectPages/proj_squares.js';
import demo from './components/projectPages/demo.js';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <div className="aboveFold"> */}
       <Navigation />
        <Route exact path='/' component={motionThumbs}></Route>
        <Route exact path='/graphic' component={graphicThumbs}></Route>
        <Route exact path='/about' component={About}></Route>

        {/*individual project pages  */}
        <Route exact path='/motionReel' component={proj_motionReel}></Route>
        <Route exact path='/legion' component={proj_legion}></Route>
        <Route exact path='/stilltolife' component={proj_stillToLife}></Route>
        <Route exact path='/squares' component={proj_squares}></Route>


        {/* Demo Page */}
        <Route exact path='/demo' component={demo}></Route>


        {/* </div> */}
       <Footer />
    </div>
    </Router>
  );
}

export default App;


//-----------unused--------------

function importComponents( path ){

  function getProjectName(string){
    let withoutExtension = string.split('.')[1];
    let fileName = withoutExtension.split('/').slice(-1);
    // console.log(fileName);
    return fileName;
  }


  let thisComponent = getProjectName(path);
  // console.log([thisComponent.slice(1, -1), path])
  return [thisComponent.slice(1, -1), path];
}
