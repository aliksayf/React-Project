import React, {useState} from 'react';
import { Col, ListGroupItem, Button, Row, Alert } from 'reactstrap';

function Counter(props) {
    const [value, setValue] = useState(props.num)
    const countChangeHandler = (sign) => {
        if (sign === '+') {
            props.bc('+', props.id)
        }
        console.log(value)
        if (sign === '-') {
            props.bc('-', props.id)
        }
    }

    const reset = () => {
        props.update(props.name, props.id)
        setValue(value - value);
    }

    return (
        <ListGroupItem className='counter'>
            {/*<Row>*/}
            {/*    <Col md='5'>*/}
                    <Alert color='light' className='name'>{props.name}: </Alert>
                    <Button outline color="secondary" className='operator' onClick={() => countChangeHandler('-')}>-</Button>
                    <div className='numbers'>{props.num}</div>
                    <Button outline color="secondary" className='operator' onClick={() => countChangeHandler('+')}>+</Button>
                {/*</Col>*/}
                {/*<Col md='5'>*/}
                    <Button color="secondary" onClick={reset}>Reset</Button>
                    <Button color="danger" onClick={() => props.delCounter(props.id, props.name)}>Delete</Button>
            {/*    </Col>*/}

            {/*</Row>*/}

        </ListGroupItem>
    )
}

export default Counter;