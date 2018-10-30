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
        <div className ="row titulo"> 
        <p>Validar niño a bordo</p>
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
        <h3>{this.state.result}</h3>
        </div>
      </div>
    )
  }
}
export default Lector;