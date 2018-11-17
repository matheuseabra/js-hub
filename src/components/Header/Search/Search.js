import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            searchText: ''
        }
    }
  
  handleChange = (e) => {
    this.setState({
        searchText: e.target.value
    })
    console.log(this.state.searchText)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange  } value={this.state.searchText} placehoder="Search for repositories on Github" />
      </div>
    )
  }
}
