import React, { useState, useReducer, useContext } from "react";
import "./App.css";
import { Layout, Button, Icon } from "antd";
import SmurfList from "./smurf/SmurfList";
import SmurfForm from "./forms/SmurfForm";
import { Context } from "../Store";

const App = () => {
  const [collapse, setCollapse] = useState(true);

  const onCollapse = () => {
    console.log(collapse);
    setCollapse(!collapse);
  };

  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#1890ff" }}>
        <div className="logo">
          <img src="https://vignette4.wikia.nocookie.net/smurfs/images/8/89/Wiki-wordmark.png/revision/latest" />
        </div>
      </Header>
      <Layout>
        <Sider
          width={300}
          collapsedWidth={100}
          style={{ background: "#fff" }}
          collapsible
          collapsed={collapse}
          // onCollapse={onCollapse}
        >
          <Button
            type="primary"
            onClick={onCollapse}
            style={{ marginBottom: 10, margin: 30 }}
          >
            <Icon type={collapse ? "menu-unfold" : "menu-fold"} />
          </Button>
          <SmurfForm />
        </Sider>

        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <SmurfList />
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }} />
    </Layout>
  );
};

export default App;
