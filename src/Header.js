import React from 'react';
import logo from './logo.svg';
import Menu from "./Menu";
import Logo from "./Logo";


function Header(props) {
    return (
        <header>

            <div className='header-content'>
                <Logo/>
                <div className='logoName'>React JS course</div>
                <Menu menuItem={props.menuItem} />
            </div>

        </header>
    );
}

export default Header;
