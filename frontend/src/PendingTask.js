import React from "react";

class PendingTask extends React.Component {
  render() {
    return(
      <div>
        <h1>
          {this.props.description} {this.props.category}
        </h1>
      </div>
    );
  }
}

export default PendingTask;