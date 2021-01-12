import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './Main';
import Time from './Time';

class Routes extends React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path ='/' component={Time}/>
                    <Route exact path ='/main' component={Main}/>
                    <Route exact path="/main/:sec" component={Main}/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;