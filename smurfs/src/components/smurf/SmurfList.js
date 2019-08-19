import React, { useReducer, useContext, useEffect } from "react";
import { List, Avatar } from "antd";
import { getSmurfs } from "../../store/smurfReducer";
import { Context } from "../../store/Store";

const SmurfList = props => {
  useEffect(() => {
    getSmurfs();
  }, []);

  if (smurfs) {
    if (smurfs.isFetching) return <h3>Loading...</h3>;
    return (
      <div style={{ background: "#fff", minHeight: 280 }}>
        <List
          header={<h1>The Smurfs</h1>}
          bordered
          dataSource={smurfs.smurfs.data}
          renderItem={item => (
            <List.Item key={item.id} value={item.id}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://vignette.wikia.nocookie.net/smurfs/images/0/0b/Cartoon_Icon.jpg/revision/latest" />
                }
                title={item.name}
                description={`Age: ${item.age}, Height: ${item.height}`}
              />
            </List.Item>
          )}
        />
      </div>
    );
  } else return null;
};
export default SmurfList;
