import React, { useState } from "react";
import Btn from './btn';

export default function Number() {

    const [initArr, setInitArr] = useState([0, 0]);
    const [btnArr, setBtnArr] = useState([1]);
    const [total, setTotal] = useState(80);
    const [warn, setWarn] = useState(null);


    const userInput = (e, idx) => {
        if (e.target.value > 10000) setWarn('The number is too big');
        if (isNaN(e.target.value)) setWarn('Please enter a number');

        else if (e.target.value > 0) {

            let tempArr = initArr;
            tempArr[idx] = e.target.value;
            setInitArr([...tempArr]);

            let newArr = [...initArr];
            newArr.sort((a, b) => +a - +b);
            let resArr = [];
            for (let i = +newArr[0]; i <= +newArr[newArr.length - 1]; i++) {
                if (i !== 0) {
                    resArr.push(i);
                }
            }
            resArr.sort((a, b) => a - b);
            setBtnArr([...resArr])
            setWarn(null)
        }else setWarn('Enter a positive number')
    };

    const changeTotal = (value) => {
        setTotal(total + value)
    }

    return (
        <div className="App">
            <h2>Array of buttons </h2>
            <h3>Enter two numbers</h3>
            <h3 style={{ color: 'red'}}>{warn}</h3>
            gap from  <span/>
            <input size='1' onChange={(e) => userInput(e, 0)} placeholder='0'></input>
            <span/> to <span/>
            <input size='1' onChange={(e) => userInput(e, 1)} placeholder='0'></input>
            <p/>
            <div>
                {btnArr.reverse().map((el, i) =><Btn key={-el} name={-el} changeTotal={changeTotal}/> )}
                <span/> {total} <span/>
                {btnArr.reverse().map((el, i) =><Btn key={el} name={el} changeTotal={changeTotal}/> )}
            </div>
        </div>
    );
}