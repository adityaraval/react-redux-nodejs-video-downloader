import React, { Component } from 'react';
import {NavBar} from './NavBar';
import {Footer} from './Footer';
import SearchBox from '../containers/SearchBox';
import VideoDetails from '../containers/VideoDetails';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SearchBox/>
        <VideoDetails/>
        <Footer/>
      </div>
    );
  }
}

export default App;
