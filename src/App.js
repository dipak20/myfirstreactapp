import React from "react";
import MainPage from "./mainpage";
import Hello from "./Hello";
import TestRoute from "./TestRoute";
//import history from "./history";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/hello" component={Hello}></Route>
        <Route path="/hello/test" component={TestRoute}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
