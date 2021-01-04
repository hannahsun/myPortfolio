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
import proj_blend from './components/projectPages/proj_blend';
import proj_passage from './components/projectPages/proj_passage';
import proj_coffee from './components/projectPages/proj_coffee';
import proj_2020opening from './components/projectPages/proj_2020opening';
import proj_basketball from './components/projectPages/proj_basketball';
import proj_marbleglass from './components/projectPages/proj_marbleglass';
import proj_spider from './components/projectPages/proj_spider';
import proj_desktop from './components/projectPages/proj_desktop';
import proj_machine from './components/projectPages/proj_machine';
import proj_notification from './components/projectPages/proj_notification';
import proj_hanukkah from './components/projectPages/proj_hanukkah';
//graphic design projects
import proj_planit from './components/projectPages/proj_planit';
import proj_blackout from './components/projectPages/proj_blackout';
import proj_salmongold from './components/projectPages/proj_salmongold';

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
        <Route exact path='/marbleglass' component={proj_marbleglass}></Route>
        <Route exact path='/notification' component={proj_notification}></Route>
        <Route exact path='/2020opening' component={proj_2020opening}></Route>
        <Route exact path='/hanukkah' component={proj_hanukkah}></Route>
        <Route exact path='/basketball' component={proj_basketball}></Route>
        <Route exact path='/spider' component={proj_spider}></Route>
        <Route exact path='/coffee' component={proj_coffee}></Route>
        <Route exact path='/desktop' component={proj_desktop}></Route>
        <Route exact path='/machine' component={proj_machine}></Route>
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
        <Route exact path='/blend' component={proj_blend}></Route>
        <Route exact path='/passage' component={proj_passage}></Route>
        {/* graphic design project */}
        <Route exact path='/planit' component={proj_planit}></Route>
        <Route exact path='/blackout' component={proj_blackout}></Route>
        <Route exact path='/salmongold' component={proj_salmongold}></Route>


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
