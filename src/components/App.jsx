import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DrawableCanvas from 'react-drawable-canvas'; 
// import DrawableCanvas from './DrawableCanvas.jsx';
require('../styles/style.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brushColor: '#FFFF00',
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: '#00FFDC'

      },
      clear: false
    }
  }

  handleOnClickClear() {
    this.setState({
      clear: true
    });
  }
  handleOnClickChangeColorYellow() {
    this.setState({
      brushColor: '#FFFF00',
      clear: false
    });
  }
  handleOnClickChangeColorBlack() {
    this.setState({
      brushColor: '#000000',
      clear: false
    });
  }
  handleOnClickChangBgToRed() {
    const newstate = this.state;
    newstate.canvasStyle.backgroundColor = '#FF0000';
    newstate.clear = false;
    this.setState({
      newstate
    });
  }
  handleOnClickChangBgToBlue() {
    const newstate = this.state;
    newstate.canvasStyle.backgroundColor = '#00FFDC';
    newstate.clear = false;
    this.setState({
      newstate
    });
  }
  render() {
    const ops = {
      brushColor: '#800909',
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: '#00FFDC',
        borderColor: '#786B6B',
        borderStyle: 'solid'
      }
    };
    const ops1 = {
      brushColor: '#0033CC',
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: '#00FF00',
        borderColor: '#786B6B',
        borderStyle: 'solid'
      }
    };
    const ops2 = {
      brushColor: '#00FFFF',
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: '#FFFF00',
        borderColor: '#786B6B',
        borderStyle: 'solid',
        borderRadius: '90px'
      }
    };
    const ops3 = {
      brushColor: '#FFFFFF',
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: '#FF66FF',
        borderColor: '#786B6B',
        borderStyle: 'solid',
        borderRadius: '70px'
      }
    };
    const ops4 = {
      brushColor: '#84ff99',
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: '#ff7d7d',
        borderColor: '#786B6B',
        borderStyle: 'solid'
      }
    };
    const ops5 = {
      brushColor: '#000000',
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: '#FFFFFF',
        borderColor: '#786B6B',
        borderStyle: 'solid'
      }
    };
    return (
      <div>
        <div className='canvas-state'>
        <p>Using style on state</p>
        <div className='button-bar'>
          <button onClick={() => this.handleOnClickClear()}>Clear all</button>
          <button onClick={() => this.handleOnClickChangeColorYellow()}>Set color to yellow</button>
          <button onClick={() => this.handleOnClickChangeColorBlack()}>Set color to black</button>
          <button onClick={() => this.handleOnClickChangBgToRed()}>Set backgroundColor to red</button>
          <button onClick={() => this.handleOnClickChangBgToBlue()}>Set backgroundColor to blue</button>
        </div>
        <DrawableCanvas {...this.state} />
        </div>
          <div className='canvasWrapper'>


            <div className='canvas2'>
              <DrawableCanvas {...ops2}/>
            </div>

            <div className='canvas'>
              <DrawableCanvas {...ops3}/>
            </div>

            <div className='canvas'>
              <DrawableCanvas {...ops4}/>
            </div>
          </div>
          <div className='canvasWrapper'>
            <div className='canvasfill'>
              <DrawableCanvas {...ops4}/>
            </div>

            <div className='canvasfill'>
              <DrawableCanvas {...ops5}/>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
