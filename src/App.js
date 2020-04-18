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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
