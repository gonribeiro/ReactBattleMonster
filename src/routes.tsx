import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Playing from './pages/Match';
import Credits from './pages/Credits';
import HowTo from './pages/HowTo';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/playing" exact component={Playing} />
                <Route path="/howto" exact component={HowTo} />
                <Route path="/credits" exact component={Credits} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;