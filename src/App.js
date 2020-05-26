
import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  
  state={


    red : 255, 
    green : 255,
    blue: 255

  }

  
  
  handleChange = (e) => {

    this.setState ({
      [e.target.name] : e.target.value
    })
    document.body.style.backgroundColor =`rgb(${this.state.red} , ${this.state.green}, ${this.state.blue})`;

  }

  
  

  render() {
    let { red, blue , green} = this.state;
    let rHex = Number(red).toString(16);
    let gHex = Number(green).toString(16);
    let bHex = Number(blue).toString(16);


    return (
      <div className="box">
      <h1>Color Picker</h1>
      
      <input 
        onChange={this.handleChange}
        value={red}
        type="range"
        min="0" 
        max="255"
        name="red">
      </input><h2>{red}</h2>
      
      <input
        onChange={this.handleChange}
        value={green} 
        type="range" 
        min="0" 
        max="255"
        name="green">
      </input><h2>{green}</h2>


      <input 
        onChange={this.handleChange}
        value={blue} 
        type="range" 
        min="0" 
        max="255"
        name="blue">
      </input><h2>{blue}</h2>
      
      
  

      <h1>
       rgb({red}, {green}, {blue})
       </h1>

      <h1>
        #{rHex}{gHex}{bHex}
      </h1>
  
      </div>
    );
  }
}

export default App;



