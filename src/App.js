import React, { Fragment } from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Project } from './Components/Project/Project';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Fragment>
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/project" component={Project}/>
    
    </Switch>
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
