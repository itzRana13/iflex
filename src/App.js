import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/header';
import Home from './components/Home'
import About from './components/Whoweare';
import Career from './components/Career';
import Contact from './components/Reach-us';
import Offcanvas from './components/Offcanvas';
import WebDevelopment from './components/pages/WebDevelopment';
import AppDevelopment from './components/pages/AppDevelopment';
import DigitalMarketing from './components/pages/DigitalMarketing';
import EcommerceSolutions from './components/pages/EcommerceSolutions';
import Outsource from './components/pages/Outsource';
import MISDevelopment from './components/pages/MISDevelopment';
import MotionVideos from './components/pages/MotionVideos';
import UIUXDesign from './components/pages/UIUXDesign';
import Footer from './components/Footer';
import Work from './components/OurWork';
import JobApplicationForm from './components/pages/JobApplicationForm';




function App() {
  

 return (
    <BrowserRouter>
      <Navbar/>
      <div>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/whoweare" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/Reach-us" component={Contact} />
          <Route path="/OurWork" component={Work} />
          <Route path="/Offcanvas" component={Offcanvas} />
          <Route path="/WebDevelopment" component={WebDevelopment} />
          <Route path="/AppDevelopment" component={AppDevelopment } />
          <Route path="/DigitalMarketing" component={DigitalMarketing} />
          <Route path="/EcommerceSolutions" component={EcommerceSolutions} />
          <Route path="/MISDevelopment" component={ MISDevelopment} />
          <Route path="/Outsource" component={Outsource} />
          <Route path="/MotionVideos" component={MotionVideos} />
          <Route path="/UIUXDesign" component={UIUXDesign} />
          <Route path="/JobApplicationForm" component={JobApplicationForm} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    
      <Footer />
    </BrowserRouter>
  );
}

export default App;
