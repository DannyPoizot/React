import React from 'react';


function TestButton(props) {

    // function handleClick(e) {
    function activeLasers(e) {
        console.log(e);
        e.preventDefault();
    } 
    return (
        <button href="#" onClick={activeLasers}>
            {props.text} 
        </button>
    );
}

export default TestButton;  