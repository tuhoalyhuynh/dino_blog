import logo from './logo.svg';
import './App.css';
import Dino from "./Dino"
import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Dino 
          title={this.props.post.title}
          author={this.props.post.author}
          body={this.props.post.body}
          comments={this.props.post.comments}
        />
      </div>
    );
  }
}

export default App;