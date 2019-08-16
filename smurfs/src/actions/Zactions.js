export const addTodo = (todo, dispatch) => {
  dispatch({
    type: "ADD_TODO",
    todoText: todo
  });
};

///???
export const clearCompleted = (todoId, dispatch) => {
  dispatch({
    type: "CLEAR_COMPLETED",
    todoId
  });
};

export const removeTodo = (todoId, dispatch) => {
  dispatch({
    type: "REMOVE_TODO",
    todoId
  });
};

export const toggleTodo = (todoId, dispatch) => {
  dispatch({
    type: "TOGGLE_TODO",
    todoId
  });
};
