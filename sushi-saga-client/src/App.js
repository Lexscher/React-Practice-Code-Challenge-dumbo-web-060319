import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
  state = {
    allSushi: [],
    currentSushi: [],
    min: 0,
    eaten: []
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({ allSushi: [...data] });
        this.renderFour();
      });
  }

  renderFour = () => {
    let newArr = this.state.allSushi.slice(this.state.min, this.state.min + 4);
    this.setState({ currentSushi: newArr });
  };

  moreSushi = () => {
    this.setState({
      min: this.state.min + 4
    });
    this.renderFour();
  };

  handleEatenSushi = event => {
    console.log(event.currentTarget.id);
    let found = this.state.allSushi.find(sushi => {
      return sushi.id == event.currentTarget.id;
    });
    console.log(found);

    this.setState({
      eaten: [...this.state.eaten, found]
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          handleEatenSushi={this.handleEatenSushi}
          currentSushi={this.state.currentSushi}
          moreSushi={this.moreSushi}
        />
        <Table />
      </div>
    );
  }
}

export default App;
