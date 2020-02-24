import React from "react";
import "./App.css";

import PendingTask from "./PendingTask";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      category: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/").then(function(data) {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <PendingTask description="Done with Database" category="work" />
      </div>
    );
  }
}

export default App;
