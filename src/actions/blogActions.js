import { v4 as uuid } from "uuid";
export const addBlog = ({
  id = uuid(),
  title = "",
  description = "",
  dataAdded = undefined,
}) => {
  return {
    type: "ADD_BLOG",
    blog: {
      id,
      title,
      description,
      dataAdded,
    },
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
