import React, { useReducer, useContext, useEffect } from "react";
import { List, Typography } from "antd";
import Store from "../../Store";
import { getSmurfs } from "../../reducers/reducer";

const SmurfList = props => {
  const [state, dispatch] = useContext(Store);
  //const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getSmurfs();
  }, []);
  function handleClick() {
    dispatch({ type: "GET_SMURFS" });
  }
  const handleClickz = todoId => {
    //toggleTodo(todoId, dispatch);
  };

  const handleRemoveTodo = todoId => {
    //removeTodo(todoId, dispatch);
  };

  return (
    <div style={{ background: "#fff", minHeight: 280 }}>
      {console.log(state)}
      <List
        header={<h1>My Todo's</h1>}
        bordered
        dataSource={state.smurfs}
        renderItem={item => (
          <List.Item
            key={item.id}
            value={item.id}
            onClick={() => handleClick(item.id)}
            onDoubleClick={() => handleRemoveTodo(item.id)}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};
export default SmurfList;
