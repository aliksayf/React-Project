import React, { useState} from 'react';

function Content(props) {

        let[searchValue, setValue] = useState('')
        let newValue = '';
       const inputHandler = (e) => {
            newValue = e.target.value
        }

        const clickButtonHandler = () => {
            setValue(searchValue = `"${newValue}" not found`);
        }
        return (
            <main>
                <input type='text' onChange={inputHandler}/>
                <button onClick={clickButtonHandler}>Search</button>
                <p>{searchValue} </p>
                <h2>Content</h2>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus at augue eget arcu
                        dictum.
                        Id velit ut tortor pretium. Faucibus a pellentesque sit amet porttitor eget. Facilisis leo vel
                        fringilla est ullamcorper eget nulla facilisi. Risus at ultrices mi tempus imperdiet nulla
                        malesuada
                        pellentesque elit. Lobortis scelerisque fermentum dui faucibus in. Id consectetur purus ut
                        faucibus.
                        Diam vulputate ut pharetra sit. Iaculis eu non diam phasellus. Augue neque gravida in fermentum
                        et
                        sollicitudin ac orci phasellus. Sed arcu non odio euismod lacinia. Odio euismod lacinia at quis
                        risus sed.
                    </p>
                    <p>
                        Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Turpis in eu mi
                        bibendum
                        neque egestas congue quisque egestas. A lacus vestibulum sed arcu non odio euismod lacinia.
                        Diam vel quam elementum pulvinar. Arcu ac tortor dignissim convallis aenean et tortor at risus.
                        Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Mattis pellentesque id nibh
                        tortor id. Quam id leo in vitae turpis massa. Nibh mauris cursus mattis molestie. Auctor urna
                        nunc
                        id cursus metus. Morbi non arcu risus quis varius quam quisque id diam. Quis risus sed vulputate
                        odio ut. Urna porttitor rhoncus dolor purus non enim. Id leo in vitae turpis massa sed
                        elementum.
                    </p>

                </article>


            </main>
        );
    }
export default Content;

