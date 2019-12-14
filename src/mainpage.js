import React from 'react';

class MainPage extends React.Component {
    state = {
        name: "None",
        id: 123
      }
  
    componentWillMount() {
      console.log("Component will mount");
    }
  
    componentDidMount() {
      console.log("component did mount");
    }
  
    componentWillUpdate() {
      console.log("Component will update");
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.name !== this.state.name) {
        console.log("We have to do something...");
      }
    }
  
    componentWillUnmount() {
      console.log("Component will be unmounted...");
    }
  
    changeName = () => {
      this.setState({
        name: "Dipak"
      })
    }
  
    changeId = () => {
      this.setState({
        id: 1111
      })
    }
  
    changeMyName = (e) => {
      this.setState({
        name: e.target.value
      });
    }
  
    render() {
      return(
        <div>
          <h1>Welcome, {this.state.name}!</h1>
          <input type="text" onChange={(e) => this.changeMyName(e)}></input>
          <button type="button" onClick={this.changeName}>Click Me</button>
          <button type="button" onClick={this.changeId}>Change ID</button><br />
          <a href="/hello">Click here to go to Hello</a>
        </div>
      );
    }
}

export default MainPage;