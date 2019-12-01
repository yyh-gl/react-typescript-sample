// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import '../index';
import { RouteConfig } from 'react-router-config';
import App from "../App";
import Users from "../pages/users";

const routes: RouteConfig[] = [
    {
        component: App,
        routes: [
            {
                path: '/users',
                component: Users,
            },
        ]
    }
];

export default routes;
