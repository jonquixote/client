import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import $ from 'jquery'; 
// import 'semantic-ui-css/semantic.js'
// import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-css/semantic.js'


class App extends Component {
  // constructor () {
  //   super()
  //   this.state = {}
  //   this.getStocks = this.getStocks.bind(this)
  //   this.getStock = this.getStock.bind(this)
  // }

  // componentDidMount () {
  //   this.getStocks()
  // }

  // fetch (endpoint) {
  //   return window.fetch(endpoint)
  //     .then(response => response.json())
  //     .catch(error => console.log(error))
  // }

  // getStocks () {
  //   this.fetch('/api/stocks')
  //     .then(stocks => {
  //       if (stocks.length) {
  //         this.setState({stocks: stocks})
  //         this.getstock(stocks[0].id)
  //       } else {
  //         this.setState({stocks: []})
  //       }
  //     })
  // }

  // getStock (id) {
  //   this.fetch(`/api/stocks/${id}`)
  //     .then(stock => this.setState({stock: stock}))
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;