// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BandInput extends Component {

  constructor(){
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: "" })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: data => dispatch({ type: "ADD_BAND", name: data })
  }
}


export default connect(null, mapDispatchToProps)(BandInput)
