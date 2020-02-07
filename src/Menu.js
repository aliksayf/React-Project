import React from 'react';
import logo from './logo.svg';
import MenuItem from "./MenuItem";

function Menu() {
    return (
        <nav>
            <ol>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </ol>
        </nav>
    );
}

export default Menu;
