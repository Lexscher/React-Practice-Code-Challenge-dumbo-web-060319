import React, { Component } from 'react'

class Sushi extends Component  {
  state = {
    eaten: false
  }

  eatSushi = () => {
    this.setState({eaten: !this.state.eaten})
    // use the function passed by props
  }

  render() {
  console.log(this.props)
  const {name, img_url, price} = this.props.sushiData
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.eatSushi}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          this.state.eaten ?
            null
          :
            <img src={img_url} alt={'picture of ' + name}  width="95rem"/>
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
      }
}

export default Sushi