import React, { createContext, useReducer, useContext } from "react";
import "./App.css";
import { Layout } from "antd";
import SmurfList from "./smurf/SmurfList";
import SmurfForm from "./forms/SmurfForm";
import { Context } from "../Store";

const App = () => {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <div className="logo">Todo's Reducer</div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
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
