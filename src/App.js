import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";
import AddNew from "./AddNew";


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
        {name: 'First counter', number: 0, id: 1},
        {name: 'second', number: 0, id: 2}
    ];
    let [counterList, setCounterList] = useState(counters);

    let [total, setTotal] = useState(counters[0].number + counters[1].number);

    function buttonClick(val, id, num) {
        if (val === '+') {
            setTotal(total + 1);
            setCounterList(counterList[id - 1].number = num);
        }
        if (val === '-') {
            setTotal(total - 1);
        }
        //console.log(val)
    }

    function addNewCounter(nameArg, value) {
        let newC = [...counterList, {name: nameArg.name, number: value.number, id: counterList.length + 1}];
        setCounterList(counterList = newC);
        setTotal(counterList.map(el => el.number).reduce((a, b) => a + b));
        //console.log(counterList);
    }

    function update(name, value, id) {
        const idx = counterList.findIndex(el => el.id === id);
        //const oldValue = counterList[idx];
        const newValue = {name: name, number: value, id: id};
        const newList = [...counterList.slice(0, idx),
            newValue,
            ...counterList.slice(idx + 1)];
        setCounterList(counterList = newList);
        setTotal(counterList.map(el => el.number).reduce((a, b) => a + b));
        //setCounterList(counterList[id - 1].number = value);
        console.log(counterList);
    }

    function deleteCounter(id) {
        const idx = counterList.findIndex(el => el.id === id);
        const newList = [...counterList.slice(0, idx),
            ...counterList.slice(idx + 1)];
        setCounterList(counterList = newList);
        setTotal(counterList.map(el => el.number).reduce((a, b) => a + b));
    }

    function totalReset() {
        setCounterList(counters);
        setTotal(counters[0].number + counters[1].number);
        //console.log(counterList, total)
    }

    return (
        <div className="App">
            <Header menuItem={item}/>
            <Content/>
            <calc className='calculator'>

                Total: {total}
                <button onClick={totalReset}>Reset All</button>
                <hr/>
                {counterList.map(el => <Counter key={el.id} num={el.number} name={el.name} id={el.id}
                                                bc={buttonClick}
                                                update={update}
                                                delCounter={deleteCounter}/>)}

                <AddNew adnc={addNewCounter}/>

            </calc>
            <Footer menuItem={item} menuFooter={itemFooter} menuCopy={copyRight}/>
        </div>
    );
}

export default App;
