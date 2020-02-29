import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";
import AddNew from "./AddNew";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, ListGroupItem} from 'reactstrap';


const item = [
    {
        text: 'Home',
        link: 'home-page'
    },
    {
        text: 'About',
        link: 'about-page'
    },
    {
        text: 'Products',
        link: 'prod-page'
    },
    {
        text: 'Contact',
        link: 'cont-page'
    }
];

const itemFooter = [
    {
        text: 'support',
        link: 'sup-page'
    },
    {
        text: 'FAQ',
        link: 'faq-page'
    },
    {
        text: 'references',
        link: 'ref-page'
    },
    {
        text: 'map',
        link: 'map-page'
    }
];

const copyRight = [{
    link: 'alik.sayf',
    text: 'Ⓒ alik.sayf 2020'
}];

function App() {

    const counters = [
        {name: '1 counter', number: 0, id: 1},
        {name: '2 counter', number: 0, id: 2}
    ];
    const shown = {
        'display': 'block'
    };
    const hidden = {
        'display': 'none'
    };
    let [counterList, setCounterList] = useState(counters);
    const [maxId, setMaxId] = useState(100);
    const [modal, setModal] = useState(false );
    const [confirmName, setConfirmName] = useState('');
    const [confirmId, setConfirmId] = useState();
    const [inputedName, setInputedName] = useState('');
    const [active, setActive] = useState(true);
    const [show, setShow] = useState(hidden)

    const toggle = (id, name) => {
        setModal(!modal);
        setConfirmName(name);
        setConfirmId(id)
    }

    function buttonClick(val, id) {
        const idx = counterList.findIndex(el => el.id === id)
        const newCounterList = [...counterList];
        if (val === '+') {
            newCounterList[idx].number = newCounterList[idx].number + 1;
        }
        if (val === '-') {
            newCounterList[idx].number = newCounterList[idx].number - 1;
        }
        setCounterList(newCounterList);
    }

    function addNewCounter(nameArg, value) {
        let newC = [...counterList, {name: nameArg.name, number: value.number, id: maxId + 1}];
        setMaxId(maxId + 1);
        setCounterList(newC);
        console.log(counterList)
    }

    function update(name, id) {
        const idx = counterList.findIndex(el => el.id === id);
        const newCounterList = [...counterList];
        newCounterList[idx].number = 0;
        setCounterList(newCounterList);
    }

    function deleteCounter() {
        const id = confirmId;
        const newList = counterList.filter(el => el.id !== id);
        setCounterList(newList);
        toggle();
    }

    function confirmInputedName (e) {
        if(e.target.value.trim() === confirmName.trim()) {
            setActive(false);
        }
        console.log(e.target.value, active)
    }

    function totalReset() {
        let newCounterLIst = counterList.map(el => ({...el, number: 0}))
        setCounterList(newCounterLIst);
        setShow(shown)
    }

    function closeModal() {
        if(show === shown) {
            setShow(hidden)
        }
        console.log(show !== shown)
    }

    // window.onclick = function(event) {
    //     // if (event.target == modal) {
    //     //     modal.style.display = "none";
    //     // }
    //     console.log(event.target === )
    // }

    return (
        <div className="container" >
            <div className='myModal' style={show}>
                Reset all counters?
                <div className='myModalFooter'>
                    <button>Cancel</button>
                    <button>Reset</button>
                </div>
            </div>
            <div onClick={closeModal}>
            <Header menuItem={item}/>
            {/*<Content/>*/}
            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody>
                    Enter counter name <strong>{confirmName}</strong> to delete it {inputedName}
                    <input onChange={confirmInputedName} ></input>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <Button color="danger" disabled={active} onClick={deleteCounter} type='Submit'>Delete</Button>{' '}
                </ModalFooter>
            </Modal>
            <div className='calculator'>

                <Alert color='light' className='name'>Total: </Alert>
                <div className='numbers'>{counterList.map(el => el.number).reduce((a, b) => a + b)}</div>
                <Button onClick={totalReset}>Reset All</Button>
                <hr/>
                {counterList.map(el => <Counter key={el.id}
                                                num={el.number}
                                                name={el.name}
                                                id={el.id}
                                                bc={buttonClick}
                                                update={update}
                                                delCounter={toggle}/>)}

                <AddNew adnc={addNewCounter}/>

            </div>
            <Footer menuItem={item} menuFooter={itemFooter} menuCopy={copyRight}/>
        </div>
        </div>
    );
}

export default App;
