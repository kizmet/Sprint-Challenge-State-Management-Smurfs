import React, { useReducer, useState, useContext, useEffect } from "react";
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
import axios from "axios";

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
  handleChange,
  setSubmitting,
  handleBlur,
  status,
  setFieldValue,
  setFieldTouched,
  name
}) => {
  const [user, setUser] = useState([]);
  const [smurfs, dispatch] = useContext(Context);

  const handleSubmit = () => {
    console.log(values);
    //dispatch({ type: "decrement" })
    saveSmurf(dispatch, values);
    setSubmitting(false);
  };

  // useEffect(() => {
  //   if (status) {
  //     setUser([...user, status]);
  //   }
  // }, [status]);

  return (
    <Card
      title="Add a New Smurf"
      style={{
        padding: 20,
        marginLeft: 10
        // minHeight: 280
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
            prefix={<Icon type="smile" theme="twoTone" />}
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
            prefix={<Icon type="number" />}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            placeholder="age"
            label="age"
            name="age"
            id="age"
            type="number"
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
            prefix={
              <Icon type="up-square" theme="twoTone" twoToneColor="#52c41a" />
            }
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
        <Form.Item label="Add Smurf">
          <Button
            icon="plus-circle"
            theme="twoTone"
            twoToneColor="#eb2f96"
            onBlur={handleBlur}
            onChange={handleChange}
            type=""
            htmlType="submit"
          />
        </Form.Item>
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
      height: height || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    height: Yup.string().required("Required")
  })
})(SmurfFormiks); // currying functions in Javascript

export default SmurfForm;
