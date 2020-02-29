import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalDelete(props) {


    return (
        <div show={props.show} onHide={props.close}>
            <div>
                <div>Enter counter name {props.name} to delete it</div>
            </div>
            <div>
                <button variant="secondary" onClick={props.close}>
                    Cancel
                </button>
                <button variant="primary" onClick={props.close}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ModalDelete;