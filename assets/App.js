import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './styles/app.css';
import './bootstrap';

// Components
import Sidebar from './components/Navigation/Sidebar';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Gestion from './pages/Gestion';
import Help from './pages/Help';
import Setting from './pages/Setting';
import Error404 from './pages/Error404';

// themes
import './styles/app.css';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Sidebar>
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/products" component={Shop}/>
                        <Route path="/gestion" component={Gestion}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/aide" component={Help}/>
                        <Route path="/setting" component={Setting}/>
                        <Route path="/erreur-404" component={Error404}/>
                    </Switch>
                </Sidebar>
            </Router>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));