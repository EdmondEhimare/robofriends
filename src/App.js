import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { Robots } from "./Robots";


class App extends Component {
    constructor() {
        super()
        this.state = {
          robots: Robots,
          searchfield: ""
        };
    }


  render() {
    return (
      <div className="tc pa3">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList Robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
