// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import '../index';
import { RouteConfig } from 'react-router-config';
import App from "../App";
import Profile from "../pages/Profile";

const routes: RouteConfig[] = [
    {
        component: App,
        routes: [
            {
                path: '/users/:id',
                component: Profile,
            },
        ]
    }
];

export default routes;
