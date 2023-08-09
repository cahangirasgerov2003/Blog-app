import { Link } from "react-router-dom";
import "./blogListElement.css";
import { connect } from "react-redux";
import { removeBlog } from "../actions/blogActions";

import React from "react";

const BlogListElement = (props) => {
  return (
    <ul>
      <li>
        {props.title} -{" "}
        <Link to={`${props.id}`} style={{ textDecorationLine: "underline" }}>
          Details
        </Link>{" "}
        -{" "}
        <Link
          to={`/edit/${props.id}`}
          style={{ textDecorationLine: "underline" }}
        >
          Edit
        </Link>{" "}
        -{" "}
        <button
          type="button"
          onClick={() => {
            props.dispatch(removeBlog(props.id));
          }}
        >
          Delete
        </button>
      </li>
    </ul>
  );
};

export default connect()(BlogListElement);
