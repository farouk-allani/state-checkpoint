import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //Start State object declaration
  state = {
    Person: {
      fullName: "Farouk Allani",
      bio: "Full Stack Developer with over 10 years of experience in JavaScript,  React, Css, Html. Led development of 500K DT research project which was deemed a gold standard by the client.",
      imgSrc: "Farouk.jpg",
      profession: "FullStack Developer",
    },
    shows: true,
    count: 0,
  };
  // End state Object
  // Start declaring functions used
  booleanSwitcher = () => {
    this.setState({ shows: !this.state.shows });
  };
  incrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  componentDidMount() {
    // After 1 seconde increment counter +1
    setInterval(this.incrementCount, 1000);
  }
  // End declaring functions

  render() {
    return (
      <div className="App">
        {/* Condition to either render profile elements or render an empty div*/}
        {this.state.shows ? (
          <div className="card-container">
            <img
              src={this.state.Person.imgSrc}
              alt="MyImage"
              className="round"
            />
            <h1 style={{ color: "#03BFCB" }}>{this.state.Person.fullName} </h1>
            <h2 style={{ color: "#FDBA0B" }}>
              {this.state.Person.profession}
            </h2>
            <p> {this.state.Person.bio} </p>
          </div>
        ) : (
          <div></div>
        )}
        {/* Button and time counter */}
        <h3>
          The component has been mounted since:
          <span style={{ color: "red" }}> {this.state.count} </span> seconds.
        </h3>
        <button onClick={this.booleanSwitcher}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>
      </div>
    );
  }
}

export default App;
