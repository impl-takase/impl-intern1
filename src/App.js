import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './component/firebase';

//screens
import Home from './screens/Home.js';
//import Profile from './screens/Profile';
import SignInOrUp from './screens/SignInOrUp.js';
import SignUp from './screens/SignUp';

import Auth from './component/Auth.js';



class App extends React.Component {
    render() {
        return (
          <div>
            <Router>
                <Switch>
                    <Route exact path="/signin" component={SignInOrUp} />
                    {}
                    <Auth>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/* <Route exact path="/profile" component={Profile} /> */}
                            <Route exact path="/signup" component={SignUp} />
                            <Route render={() => <p>not found.</p>} />
                        </Switch>
                    </Auth>
                </Switch>
            </Router> 
           
          </div>
        );
    }
}



export default App;