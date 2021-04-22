import React from 'react'

import Navbar from './components/Navbar.js';
import Home from "./components/Home.js";
import {Switch, Route, BrowserRouter} from "react-router-dom";

/*import './App.css';*/

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    {/*<Route path="/about" component={About} exact/>*/}
                </Switch>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
