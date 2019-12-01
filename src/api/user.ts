import { AxiosPromise } from 'axios';

import client from './client';
import { User } from '../models/user';

export const fetchUsers = (): AxiosPromise<User[]> => client.get(`/users`);
