const blogsState = [];

const blogReducer = (state = blogsState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "REMOVE_BLOG":
      return state.filter((blog) => {
        return blog.id !== action.id;
      });
    case "UPDATE_BLOG":
      return state.map((blog) => {
        return blog.id !== action.id ? blog : { ...blog, ...action.updateData };
      });
    case "PUSH_STORE":
      return action.blogs;
    case "DELETE_BLOGS":
      return [];
    default:
      return state;
  }
};

export default blogReducer;
