import React, { Component } from "react";

class RadioBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.onValChange = this.onValChange.bind(this);
  }

  onValChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    return (
      <form>
        <div id="radio">
          <label>
            <input
              type="radio"
              value="Imperial"
              checked={this.state.selectedOption === "Imperial"}
              onChange={this.onValChange}
            />
            Imperial
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Chaos"
              checked={this.state.selectedOption === "Chaos"}
              onChange={this.onValChange}
              data-testid="chaosbtn"
              name="Chaos"
            />
            "Chaos"
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Xenos"
              checked={this.state.selectedOption === "Xenos"}
              onChange={this.onValChange}
            />
            Other
          </label>
        </div>
        <div id="result" data-testid="result">
          Selected option is : {this.state.selectedOption}
        </div>
      </form>
    );
  }
}

export default RadioBtn;