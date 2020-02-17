import React from 'react';
import MenuItem from "./MenuItem";

function Menu(props) {

    return <nav>
        <ul>
            {props.menuItem.map(el => <MenuItem key={el.text} menuData={el}/>)}
        </ul>
    </nav>;
}

export default Menu;
