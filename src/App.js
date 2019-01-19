import React, { Component } from 'react';
import CreatePost from './createPost';
import DisplayPosts from './displayPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePost />
        <DisplayPosts />
      </div>
    );
  }
}

export default App;
