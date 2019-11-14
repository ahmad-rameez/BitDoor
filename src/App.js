import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
//import Aux from './HOC/Aux';
import NavbarTop from './Components/Menu/NavbarTop';
import Home from './Components/Home/Home';
import ExperienceBuilder from './Containers/ExperienceBuilder/ExperienceBuilder'

const App = ()=> {
  return (
    <BrowserRouter>
        <NavbarTop />
        <Route path='/' exact component={Home} />
        <Route path='/experiences'  component={ExperienceBuilder} /> 
    </BrowserRouter>
  );
}

export default App;
