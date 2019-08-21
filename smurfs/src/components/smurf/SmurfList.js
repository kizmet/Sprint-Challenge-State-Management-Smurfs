import React, { useReducer, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { List, Avatar } from "antd";
import { getSmurfs } from "../../actions";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
    console.log(props);
  }, [props.fetching, props.savingSmurf]);

  return (
    <div style={{ background: "#fff", minHeight: 280 }}>
      {props.fetching && <h3>Loading...</h3>}
      <List
        header={<h1>The Smurfs</h1>}
        bordered
        dataSource={props.smurfs}
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
};
//export default SmurfList;

const mapStateToProps = ({
  smurfs,
  error,
  fetching,
  savingSmurf,
  deletingSmurf
}) => ({
  smurfs: smurfs,
  error: error,
  fetching: fetching,
  savingSmurf: savingSmurf,
  deletingSmurf: deletingSmurf
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
