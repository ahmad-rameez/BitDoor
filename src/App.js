import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
//import Aux from './HOC/Aux';
import NavbarTop from './Components/Menu/NavbarTop';
import Home from './Components/Home/Home';
import ExperienceBuilder from './Containers/ExperienceBuilder/ExperienceBuilder'
import Companaies from './Containers/Companies/Companies';

const App = ()=> {
  return (
    <BrowserRouter>
        <NavbarTop />
        <Route path='/' exact component={Home} />
        <Route path='/experiences'  component={ExperienceBuilder} /> 
        <Route path='/companies'  component={Companaies} /> 
    </BrowserRouter>
  );
}

export default App;
