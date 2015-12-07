const React = require('react');
// const DrawableCanvas = require('react-drawable-canvas');
const DrawableCanvas = require('./DrawableCanvas.jsx');
require('../styles/style.scss');

const App = React.createClass({
  getInitialState: function() {
    return {
      brushColor: "#000000",
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: "#00FFDC"

      },
      clear: false
    };
  },
  handleOnClickClear(){
    this.setState({
      clear: true
    });
  },
  handleOnClickChangeColorYellow(){
    this.setState({
      brushColor: "#ffff00",
      clear: false
    });
  },
  handleOnClickChangeColorBlack(){
    this.setState({
      brushColor: "#000000",
      clear: false
    });
  },
  handleOnClickChangBgToRed(){
    let newstate = this.state;
    newstate.canvasStyle.backgroundColor = "#FF0000";
    newstate.clear = false;
    this.setState({
      newstate
    });
  },
  handleOnClickChangBgToBlue(){
    let newstate = this.state;
    newstate.canvasStyle.backgroundColor = "#00FFDC";
    newstate.clear = false;
    this.setState({
      newstate
    });
  },
  render() {
    return (
      <div>
        <div className="canvas-state">
        <p>Using style on state</p>
        <div className="button-bar">
          <button onClick={this.handleOnClickClear}>Clear all</button>
          <button onClick={this.handleOnClickChangeColorYellow}>Set color to yellow</button>
          <button onClick={this.handleOnClickChangeColorBlack}>Set color to black</button>
          <button onClick={this.handleOnClickChangBgToRed}>Set backgroundColor to red</button>
          <button onClick={this.handleOnClickChangBgToBlue}>Set backgroundColor to blue</button>
        </div>
        <DrawableCanvas {...this.state} />
        </div>
          <div className="canvasWrapper">
            <div className="canvas">
              <DrawableCanvas {...ops} />
            </div>

            <div className="canvas">
              <DrawableCanvas {...ops1} />
            </div>

            <div className="canvas2">
              <DrawableCanvas {...ops2}/>
            </div>

            <div className="canvas">
              <DrawableCanvas {...ops3}/>
            </div>

            <div className="canvas">
              <DrawableCanvas {...ops4}/>
            </div>
          </div>
          <div className="canvasWrapper">
            <div className="canvasfill">
              <DrawableCanvas {...ops4}/>
            </div>

            <div className="canvasfill">
              <DrawableCanvas {...ops5}/>
            </div>
          </div>

      </div>
    );
  }
});

let ops = {
  brushColor: "#800909",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#00FFDC",
    borderColor: "#786B6B",
    borderStyle: "solid"
  }
};
let ops1 = {
  brushColor: "#0033cc",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#00ff00",
    borderColor: "#786B6B",
    borderStyle: "solid"
  }
};
let ops2 = {
  brushColor: "#00ffff",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#ffff00",
    borderColor: "#786B6B",
    borderStyle: "solid",
    borderRadius:"90px"
  }
};
let ops3 = {
  brushColor: "#ffffff",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#ff66ff",
    borderColor: "#786B6B",
    borderStyle: "solid",
    borderRadius:"70px"
  }
};
let ops4 = {
  brushColor: "#333300",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#ff0000",
    borderColor: "#786B6B",
    borderStyle: "solid"
  }
};
let ops5 = {
  brushColor: "#000000",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "#786B6B",
    borderStyle: "solid"
  }
};

module.exports = App;
