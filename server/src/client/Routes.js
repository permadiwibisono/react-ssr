import React from 'react';
import App from './containers/App';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminListPage from './pages/AdminListPage';

export default [
    {
        ...App,
        routes:[
            {
                ...HomePage,
                path:'/',
                exact:true
            },
            {
                ...UserListPage,
                path:'/users',
            },
            {
                ...AdminListPage,
                path:'/admins',
            },
            {
                ...NotFoundPage
            }
        ]
    }
]