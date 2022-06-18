import React, { Component } from "react";
import Announcement from "../mainPage/announcement";
import Main from "../mainPage/main";
import Navbar from "../mainPage/navbar";
import Report from "../mainPage/report";
import Sidebar from "../mainPage/sidebar";
class App extends Component {
  render() {
    return (
      <div className="App ">
        <Navbar />
        <div className="grid grid-cols-6">
          <Sidebar />
          <div class="container col-span-5 px-5">
            <Main />
            <Announcement />
            <Report />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
