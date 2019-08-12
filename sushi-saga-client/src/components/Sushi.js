import React, { Component } from 'react';

class Sushi extends Component {
  render() {
    let { name, img_url, price, id } = this.props.sushi;
    return (
      <div className="sushi">
        <div id={id} className="plate" onClick={this.props.handleEatenSushi}>
          {/* Tell me if this sushi has been eaten! */

          !true ? null : <img src={img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
