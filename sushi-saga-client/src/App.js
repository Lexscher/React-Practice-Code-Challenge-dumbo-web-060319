import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
  state = {
    sushiPlatters: [],
    currentSushiPlatters: [],
    min: 0,
    max: 4
  };

  componentDidMount() {
    // load up all sush platters
    this.fetchSushi();
  }

  fetchSushi = () => {
    fetch(API)
      .then(res => res.json())
      .then(this.loadAllSushi);
  };

  loadAllSushi = async sushiData => {
    try {
      // Clone the data
      let sushiCloneArr = await [...sushiData]
      // use splice to get the range
      let rangedSushi = await sushiCloneArr.splice(this.state.min, this.state.max);
      // Set new states
      await this.setState({
        max: this.state.min + 4,
        sushiPlatters: [...sushiData],
        currentSushiPlatters: [...rangedSushi]
      });
    } catch (err) {
      console.error(err.stack);
    }
  };

  loadFourSushi = async () => {
    try {
      // Clone the data
      let sushiCloneArr =  await [...this.state.currentSushiPlatters]
      let rangedSushi = await sushiCloneArr.splice(this.state.min, this.state.max);
      await this.setState({ currentSushiPlatters: rangedSushi });
    } catch (err) {
      console.error(err.stack);
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushiPlatters={this.state.currentSushiPlatters}/>
        <Table />
      </div>
    );
  }
}

export default App;
