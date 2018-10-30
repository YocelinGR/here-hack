import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import './lector.css';
class Lector extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 500,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div className="container">
        <div className= "container-fluid">
                <div className= "vertical-line"></div>
                <div className= "vertical-line-right"></div>
                <div className= "vertical-line-left"></div>
                <div className= "vertical-line-ligth"></div>
                <img className= "bus-img" src="https://github.com/YocelinGR/here-hack/blob/master/src/assets/bus.png?raw=true" alt="bus-icon" />
                <h1 className= "letter">School Security</h1>
            </div>
        <div className ="row titulo"> 
          <h4>Validar niño a bordo</h4>
        </div>
        <div className="row lector">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
          </div>
          <div className="row nombre">
        <h5>{this.state.result}</h5>
        </div>
      </div>
    )
  }
}
export default Lector;