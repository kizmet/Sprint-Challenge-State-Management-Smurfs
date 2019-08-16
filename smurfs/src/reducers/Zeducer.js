import React, { createContext, useReducer } from "react";

// const initialState = {
//   todos: []
// };

const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 12345678910
    },
    {
      item: "Learn about reducers2",
      completed: false,
      id: 12345678912
    }
  ]
};

export const Store = createContext(initialState);

const addTodo = (state, todoText) => {
  const newTodo = {
    id: Date.now(),
    item: todoText,
    completed: false
  };
  return { ...state, todos: [...state.todos, newTodo] };
};

const removeTodo = (state, todoId) => {
  const newTodos = state.todos.filter(todo => todo.id !== todoId);
  return { ...state, todos: newTodos };
};

const clearCompleted = (state, todoId) => {
  const newState = state.todos.filter(todo => todo.completed === false);
  return { ...state, todos: newState };
};

const toggleTodo = (state, todoId) => {
  const newState = state.todos.map(todo => {
    if (todo.id === todoId) {
      return {
        ...todo,
        completed: !todo.completed
      };
    } else {
      return todo;
    }
  });
  return { ...state, todos: newState };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return toggleTodo(state, action.todoId);
    case "ADD_TODO":
      return addTodo(state, action.todoText);
    case "CLEAR_COMPLETED":
      return clearCompleted(state, action.todoId);
    case "REMOVE_TODO":
      return removeTodo(state, action.todoId);
    default:
      return state;
  }
};

export const SmurfProvider = props => {
  const [state, dispatch] = useReducer(
    reducer,
    props.initialState || initialState
  );
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
