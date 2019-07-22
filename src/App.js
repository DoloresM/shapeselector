import React, {Component} from 'react';
import './App.css';
import Shape from "./shape.js";

class Selector extends Component{
  constructor(){
    super();
    this.state = {
      selectedShape: "square",
      numShapesClicked: 0,
    };
  };

  selectShape = (shapeName)=>{
    this.setState({
      selectedShape: shapeName,
    })
  }

  timesclicked = ()=>{
    this.setState({
      numShapesClicked: this.state.numShapesClicked + 1,
    })
    console.log("here is", this.state.numShapesClicked)
  }

  render(){
    return(

        <div className="container">
          <div className="navbar">
            <div>Selected: </div>
            <div>{this.state.selectedShape}</div>
          </div>
          <div className="shape-list">
            <Shape shape="square"  timesclicked = {this.timesclicked} selectShape={this.selectShape}/>
            <Shape shape="circle" timesclicked = {this.timesclicked}selectShape={this.selectShape}/>
            <Shape shape="triangle" timesclicked = {this.timesclicked}selectShape={this.selectShape}/>
          </div>
          <footer>Shapes selected {this.state.numShapesClicked} times</footer>
        </div>
    )
  }
}
export default Selector;
