import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './common/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Works } from './components/Works';
import { SoftIdeas } from './components/SoftIdeas';
import { Contact } from './components/Contact';
import { PageNotFound } from './components/PageNotFound';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />
                <Route path="/softideas" component={SoftIdeas} />
                <Route path="/contact" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default App;