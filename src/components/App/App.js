import React, { Component } from "react";
import Main from "./mainPage/main";
import Navbar from "./mainPage/navbar";
import Sidebar from "./mainPage/sidebar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
