import React, { useReducer, useState, useContext ,useEffect} from "react";
import { Context } from "../../Store";
import { saveSmurf } from "../../actions/actions";
import { Field, withFormik, Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  List,
  Input,
  Icon,
  Radio,
  Select,
  Checkbox,
  Button,
  Card,
  Alert
} from "antd";
import axios from 'axios'


const SmurfForm2 = props => {
  const dispatch = useContext(Context);
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
//export default SmurfForm;


const url = "http://localhost:5000/api/register";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};
const SmurfFormiks = ({
  errors,
  error,
  touched,
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  status,
  setFieldValue,
  setFieldTouched,
  name
}) => {
  const [user, setUser] = useState([]);
  const dispatch = useContext(Context);
  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <Card
      title="Register as a New user"
      style={{
        padding: 24,
        minHeight: 280

      }}
    >
      {errors.name &&
        touched.name &&
        errors.map(error => {
          return (
            <Alert
              description={error.name}
              type="error"
              style={{ marginBottom: 2 }}
              closable
            />
          );
        })}

      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item
          label="Name"
          {...(errors.name && touched.name
            ? {
                validateStatus: "error",
                help: errors.name
              }
            : {})}
        >
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="name"
            label="name"
            name="name"
            id="name"
            type="name"
          />
        </Form.Item>
        <Form.Item
          label="Age"
          {...(errors.age && touched.age
            ? {
                validateStatus: "error",
                help: errors.age
              }
            : {})}
        >
          <Input
            prefix={<Icon type="bank" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            placeholder="age"
            label="age"
            name="age"
            id="age"
            type="age"
          />
        </Form.Item>
        <Form.Item
          label="Height"
          {...(errors.height && touched.height
            ? {
                validateStatus: "error",
                help: errors.height
              }
            : {})}
        >
          <Input
            prefix={<Icon type="bank" style={{ color: "rgba(0,0,0,.25)" }} />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.height}
            placeholder="height"
            label="height"
            name="height"
            id="height"
            type="height"
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        {console.log({Context})}
      </Form>
      {status && status.registration && <div>{status.registration}</div>}
    </Card>
  );
};

const SmurfForm = withFormik({
  mapPropsToValues({ age, name, height }) {
    return {
      age: age || "",
      name: name || "",
      height: height || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
    height: Yup.string().required("Required")
  }),

  handleSubmit(values, actions) {
    //dispatch({ type: "add", text: "hello" });
    saveSmurf(values)

  }
})(SmurfFormiks); // currying functions in Javascript

export default SmurfForm;

