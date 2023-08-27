import "./form.css";

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.blog ? props?.blog?.title : "",
      description: props.blog ? props?.blog?.description : "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();

    if (this.state.title.trim() && this.state.description.trim()) {
      this.setState({
        error: "",
      });

      this.props.addForm({
        title: this.state.title,
        description: this.state.description,
        addedBlog: new Date(),
      });

      //
    } else {
      this.setState({
        error: "Please fill in all fields of the form !",
      });
    }

    this.setState({
      title: "",
      description: "",
    });
  };

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.submitForm}>
          <div>
            <p>Title :</p>
            <input
              type="text"
              placeholder="enter blog title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <p>Description :</p>
            <textarea
              placeholder="enter blog description"
              value={this.state.description}
              onChange={(e) => {
                this.setState({
                  description: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <small style={{ color: "red" }}>{this.state.error}</small>
          <div>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
