import React from 'react';
import Home from './components/Home';
import UserList, {loadData} from './components/UserList';

export default [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        loadData,
        path:'/users',
        component:UserList
    }
]