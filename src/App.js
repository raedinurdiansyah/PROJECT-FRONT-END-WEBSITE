import React, { Component } from 'react';

import './App.css';
import { Link, Route } from 'react-router-dom';
import FrontPage from './komponen/FrontPage';
import afterlogin from './komponen/afterlogin';
import profiel from './komponen/profiel';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';




class App extends Component {
  render() {
    return (


    <div>
        <Route exact path="/" component={FrontPage}/>
        <Route path="/FrontPage" component={FrontPage}/>
        <Route path="/lobby" component={afterlogin}/>
        <Route path="/myprofile" component={profiel}/>
    </div>

      
       
      

    
    
    );
  };
}



export default App;
