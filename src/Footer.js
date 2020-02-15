import React from 'react';
import logo from './logo.svg';
import Logo from "./Logo";
import Menu from "./Menu";

function Footer(props) {
    return (
        <footer>
            <div className='header-content'>
                <Logo/>
                <Menu menuItem={props.menuItem} />
                <Menu menuItem={props.menuFooter} />
                <Menu menuItem={props.menuCopy} />
            </div>
        </footer>
    );
}

export default Footer;
