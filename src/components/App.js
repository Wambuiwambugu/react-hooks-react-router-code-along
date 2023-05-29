import React from 'react';
import { Switch, Route} from "react-router-dom"
import About from './About';
import Login from './Login';
import Home from './Home';
import NavBar from './Navbar';

function App() {
  return (
    <div>
        <NavBar />   
       <Switch>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/">
           <Home />
         </Route>
       </Switch>  
    </div>
  )
}

export default App