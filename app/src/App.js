import React, { Component } from "react";
import "./App.css";
import Upload from "./upload/Upload";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Clinical Data Management</h1>
        <div className="Card">
          <Upload />
        </div>
      </div>
    );
  }
}

export default App;
