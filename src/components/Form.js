import "./form.css";

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              placeholder="enter blog title"
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <textarea
              placeholder="enter blog description"
              onChange={(e) => {
                this.setState({
                  description: e.target.value,
                });
              }}
            ></textarea>
          </div>

          <button type="button">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default Form;
