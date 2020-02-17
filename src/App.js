import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";


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
]

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
]

const copyRight = [{
    link: 'alik.sayf',
    text: 'Ⓒ alik.sayf 2020'
}];

function App() {

    const num1 = 0, num2 = 0;
    const [total, setTotal] = useState(num1 + num2);

    function buttonClick(val) {
        if (val === '+') {
            setTotal(total + 1);
        }
        if (val === '-') {
            setTotal(total - 1);
        }
        console.log(val)
    }

    return (
        <div className="App">
            <Header menuItem={item}/>
            <Content/>
            <hr/>
            <Counter num={num1} bc={buttonClick}/>
            <Counter num={num2} bc={buttonClick}/>
            Total: {total}
            <Footer menuItem={item} menuFooter={itemFooter} menuCopy={copyRight}/>
        </div>
    );
}

export default App;
