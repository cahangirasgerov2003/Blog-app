import "./blogDetailsElement.css";

import React from "react";

const BlogDetailsElement = (props) => {
  return (
    <div className="blogDetailsContainer">
      <p>
        Blog Id :{" "}
        {props.id
          ? props.id
          : `Return to the blogs section and try again ! ${String.fromCodePoint(
              129322
            )}`}
      </p>
      <p>
        Blog Title :{" "}
        {props.title
          ? props.title
          : `Return to the blogs section and try again !${String.fromCodePoint(
              129322
            )}`}
      </p>
      <p>
        Blog Description :{" "}
        {props.description
          ? props.description
          : `Return to the blogs section and try again ! ${String.fromCodePoint(
              129322
            )}`}
      </p>
    </div>
  );
};

export default BlogDetailsElement;
