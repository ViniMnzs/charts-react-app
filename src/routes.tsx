import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../src/pages/Main';
import Globe from './pages/Globe';
import GraphFor from './pages/GraphFor';
import GraphThree from './pages/GraphThree';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/graph1'  component={GraphFor}/>
                <Route path='/graph3'  component={GraphThree}/>
                <Route path='/globe'  component={Globe}/>

            </Switch>
        </BrowserRouter>
    );
}