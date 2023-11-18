import React, { useState } from 'react';
import  { Link } from "react-router-dom";
import { AppstoreOutlined, UserAddOutlined, UserOutlined  } from '@ant-design/icons';
import { Menu } from 'antd';
import './styles/Header.css'

// const  { SubMenu } = Menu;

const Header = () => {

    const customClass1 = 'float-right';

    //menu items
    const items = [ 
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <AppstoreOutlined/>,
        },
        {
            label: 'Submenu',
            key: 'SubMenu',
            icon: <UserAddOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },
        {
            label: <Link to="/login">Login</Link>,
            key: 'login',
            icon: <UserOutlined/>,

        },
        {
            label: <Link to="/register">Register</Link>,
            key: 'register',
            icon: <AppstoreOutlined/>,
        },
    ];

    //state variable
    const [current, setCurrent] = useState("home");

    //click function
    const handleClick = (e) => {
        //console.log("BUTTON CLICK", e.key);
        setCurrent(e.key);
    };

    return (
        <div className="menu-container">
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    );
};

export default Header