import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Number from "./buttons/Number";


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
    return (
        <div className="App">
            <Header menuItem={item}/>
            {/*<Content/>*/}
            <Number/>
            <Footer menuItem={item} menuFooter={itemFooter} menuCopy={copyRight}/>
        </div>
    );
}

export default App;
