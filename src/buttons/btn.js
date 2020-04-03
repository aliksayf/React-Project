import React from 'react';

export default function Btn(props) {


    return (
        <button onClick={()=>props.changeTotal(props.name)}>{props.name}</button>
    )
}