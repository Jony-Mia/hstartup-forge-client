import { authClient } from '@/lib/auth-client';
import { Dropdown } from '@heroui/react';
import React from 'react';

const Logout = async ({children}) => {
    

    return (
        <Dropdown.Item onClick={logout} >
        {children}
        </Dropdown.Item>
    );
};

export default Logout;