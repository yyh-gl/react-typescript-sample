import React, { useEffect, useState } from 'react';

import { fetchUsers } from '../api/user';
import { User } from '../models/user';

const Users: React.FC = () => {
    const [userList, setUserList] = useState<User[] | undefined>(undefined);

    const fetchUsersReq = async () => {
        try {
            const { data } = await fetchUsers();
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const data = fetchUsersReq();
        data.then(users => {
            setUserList(users);
        });
    }, []);

    return (
        <>
            <h1>User List</h1>
            {
                userList && userList.map((user) => {
                    return (
                        <p key={user.id}>{`${user.lastName} ${user.firstName}`}</p>
                    );
                })
            }
        </>
    );
};

export default Users;
