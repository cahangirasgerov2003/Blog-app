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

// ACTIONS CREATER

export const removeBlog = (id) => {
  return {
    type: "REMOVE_BLOG",
    id,
  };
};

export const removeDb = (id) => {
  return async (dispatch) => {
    try {
      await database.ref(`blogs/${id}`).remove();
      dispatch(removeBlog(id));
    } catch (e) {
      console.log("Error : ", e);
    }
  };
};

// ACTIONS CREATER

export const updateBlog = (id, updateData) => {
  return {
    type: "UPDATE_BLOG",
    id,
    updateData,
  };
};

export const updateDb = (id, updateData) => {
  return async (dispatch) => {
    try {
      await database.ref(`blogs/${id}`).update(updateData);
      dispatch(updateBlog(id, updateData));
    } catch (e) {
      console.log("Error : ", e);
    }
  };
};

// ACTIONS CREATER
export const pushStore = (blogs) => {
  return {
    type: "PUSH_STORE",
    blogs,
  };
};

export const pullDb = () => {
  return async (dispatch) => {
    const snapshot = await database.ref("blogs").once("value");
    const blogs = [];
    snapshot.forEach((blog) => {
      blogs.push({
        id: blog.key,
        ...blog.val(),
      });
    });
    dispatch(pushStore(blogs));
  };
};

// ACTIONS CREATER
export const deleteBlogs = () => {
  return {
    type: "DELETE_BLOGS",
  };
};
