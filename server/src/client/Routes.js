import React from 'react';
import HomePage from './pages/HomePage';
import UserListPage, {loadData} from './pages/UserListPage';

export default [
    {
        path:'/',
        component:HomePage,
        exact:true
    },
    {
        loadData,
        path:'/users',
        component:UserListPage
    }
]