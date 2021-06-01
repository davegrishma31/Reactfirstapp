import React, { Component } from 'react';

function Child1 (props) {
    return(
        <div>
            <h1> This is Function Child1 page </h1>
            <p>{props.childName}</p> 
            <p>{props.childAge}</p>
            <p>{props.childZip}</p>
            <button onClick = { () => props.childIncAge(5)}>Increment Age and Zip</button>
        </div>
    )
}

export default Child1;