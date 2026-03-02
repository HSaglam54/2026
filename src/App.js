import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Standorte from './Standorte';
import Geraete from './Geraete';
import Wartung from './Wartung';
import Berichte from './Berichte';
import Benutzer from './Benutzer';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/standorte" component={Standorte} />
                        <Route path="/geraete" component={Geraete} />
                        <Route path="/wartung" component={Wartung} />
                        <Route path="/berichte" component={Berichte} />
                        <Route path="/benutzer" component={Benutzer} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;