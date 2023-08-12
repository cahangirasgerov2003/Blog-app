import database from "../firebase/configFirebase";

// ACTIONS CREATER
export const addBlog = (blog) => {
  return {
    type: "ADD_BLOG",
    blog,
  };
};

export const addBlogToDb = (newBlog = {}) => {
  return (dispatch) => {
    const { title = "", description = "", dataAdded = 0 } = newBlog;
    database
      .ref("blogs")
      .push({
        title,
        description,
        dataAdded,
      })
      .then((response) => {
        dispatch(
          addBlog({
            id: response.key,
            ...newBlog,
          })
        );
      });
  };
};

export const removeBlog = (id) => {
  return {
    type: "REMOVE_BLOG",
    id,
  };
};

export const updateBlog = (id, updateData) => {
  return {
    type: "UPDATE_BLOG",
    id,
    updateData,
  };
};
