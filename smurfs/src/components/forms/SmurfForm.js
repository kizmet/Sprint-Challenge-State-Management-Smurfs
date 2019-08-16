import React, { useReducer, useState, useContext } from "react";
import { Store } from "../../Store";
import { addSmurf } from "../../actions/actions";
import { Form, Input, Icon, Button } from "antd";

const SmurfForm = props => {
  const dispatch = useContext(Store);
  const [smurf, setSmurf] = useState([]);

  const handleChange = e => {
    setSmurf(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "add", text: "hello" });
    //addSmurf(smurf, dispatch);
    //setSmurf("");
  };

  return (
    <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
      <Form>
        <Input value={smurf} type="text" onChange={handleChange} />
        <Button
          type="dashed"
          style={{ marginTop: "10px" }}
          onClick={handleSubmit}
        >
          <Icon type="plus" /> Add Todo
        </Button>
      </Form>
    </div>
  );
};
export default SmurfForm;
