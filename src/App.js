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
import demo from './components/projectPages/demo';
//motion projects
import proj_motionReel from './components/projectPages/proj_motionReel';
import proj_legion from './components/projectPages/proj_legion';
import proj_stillToLife from './components/projectPages/proj_stillToLife';
import proj_miscellaneous from './components/projectPages/proj_miscellaneous';
import proj_liquidanimation from './components/projectPages/proj_liquidanimation';
import proj_squares from './components/projectPages/proj_squares';
import proj_starving from './components/projectPages/proj_starving';
import proj_12principles from './components/projectPages/proj_12principles';
import proj_adler from './components/projectPages/proj_adler';
import proj_chicagomemory from './components/projectPages/proj_chicagomemory';
import proj_form from './components/projectPages/proj_form';
import proj_museum from './components/projectPages/proj_museum';
//graphic design projects
import proj_planit from './components/projectPages/proj_planit';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <div className="aboveFold"> */}
       <Navigation />
        <Route exact path='/' component={motionThumbs}></Route>
        <Route exact path='/graphic' component={graphicThumbs}></Route>
        <Route exact path='/about' component={About}></Route>

        {/*motion project pages  */}
        <Route exact path='/motionReel' component={proj_motionReel}></Route>
        <Route exact path='/legion' component={proj_legion}></Route>
        <Route exact path='/stilltolife' component={proj_stillToLife}></Route>
        <Route exact path='/miscellaneous' component={proj_miscellaneous}></Route>
        <Route exact path='/liquidanimation' component={proj_liquidanimation}></Route>
        <Route exact path='/squares' component={proj_squares}></Route>
        <Route exact path='/starving' component={proj_starving}></Route>
        <Route exact path='/12principles' component={proj_12principles}></Route>
        <Route exact path='/adler' component={proj_adler}></Route>
        <Route exact path='/chicagomemory' component={proj_chicagomemory}></Route>
        <Route exact path='/form' component={proj_form}></Route>
        <Route exact path='/museum' component={proj_museum}></Route>
        {/* graphic design project */}
        <Route exact path='/planit' component={proj_planit}></Route>

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
