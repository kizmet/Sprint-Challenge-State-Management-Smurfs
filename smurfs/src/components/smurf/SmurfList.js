import React, { useReducer, useContext, useEffect } from "react";
import { List, Typography } from "antd";

import { getSmurfs } from "../../actions/actions";
import { Context } from "../../Store";

const SmurfList = props => {
  const [smurfs, dispatch] = useContext(Context);

  useEffect(() => {
    getSmurfs(dispatch);
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

  if (smurfs) {
    if (smurfs.isFetching) return <h3>Loading...</h3>;
    return (
      <div style={{ background: "#fff", minHeight: 280 }}>
        <List
          header={<h1>My Todo's</h1>}
          bordered
          dataSource={smurfs.smurfs.data}
          renderItem={item => (
            <List.Item
              key={item.id}
              value={item.id}
              onClick={() => handleClick(item.id)}
              onDoubleClick={() => handleRemoveTodo(item.id)}
            >
              {item.name}
            </List.Item>
          )}
        />
      </div>
    );
  } else return null;
};
export default SmurfList;
