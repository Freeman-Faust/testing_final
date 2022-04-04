import React from "react";
import { render } from "@testing-library/react";

class TextForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <form>
          <label>
           Text:
            <textarea data-testid="textarea1" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
           Text:
            <textarea data-testid="textarea2" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      );
    }
  }

export default TextForm