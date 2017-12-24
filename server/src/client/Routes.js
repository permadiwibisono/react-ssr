import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';

export default ()=>(
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/hi" component={()=>'Hi pewe'}/>
        <Route path="/users" component={UserList}/>
    </div>
)