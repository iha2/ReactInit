import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';

export default class App extends Component {

  constructor(props) {
    super(props);
    window.React = React;
    this.state = {
      term: '',
      items: ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']
    }
  }

  onChange = (event) => this.setState({ term: event.target.value })

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.term} onChange={this.onChange} />
          <Button value="Submit">Submit</Button>
        </form>
        <div>
        </div>
      </div>
    )
  }
}

