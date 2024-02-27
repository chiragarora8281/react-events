

























// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(){
//         super();
//         this.state ={
//             count : 0,
//         }
//         console.log(this + "this key is coming from constructor is the right place for binding this keyword");
//         this.Increment = this.Increment.bind(this) //constructor binding
//     };
//     increment(){
//         console.log(this)
//         this.setState({count : this.state.count + 1})
//     }
//     decrement=() => {
//         console.log(this)
//         this.setState({count : this.state.count -1})
//     }

//   render() {

//     return (
//         <>
//         <h1>{this.state.count}</h1>
//         <div>
//             <button onClick={this.Increment}>Increment with constructor binding</button>
//             <button onClick={()=> this.setState({count : this.state.count + 1})}> Increment with inline arrow function</button>
//             <button onClick={this.decrement}>decrement with arrow function </button>
//             <button onClick={this.increment.bind(this)}>increment with inline bind </button>
//         </div>
        
//         </>
//     )
//   }
// }
