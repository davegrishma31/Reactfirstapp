import React, { Component } from 'react';

// function Child (props) {
//     return(
//         <div>
//             <h1> This is Function Child page </h1>
//             <p>{props.childName}</p> 
//             <p>{props.childAge}</p>
//             <p>{props.childZip}</p>
//             <button onClick = { () => props.childIncAge(5)}>Increment Age and Zip</button>
//         </div>
//     )
// }

// export default Child;

export default class Child extends Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h1>Class Child Page </h1>
                <p>{this.props.childName}</p> 
                <p>{this.props.childAge}</p>
                <p>{this.props.childZip}</p>
                <button onClick = { this.props.childIncAge}>Increment Age and Zip</button>
            </div>
        )
    }
}