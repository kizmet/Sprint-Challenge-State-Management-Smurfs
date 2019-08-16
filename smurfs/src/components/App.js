import React, { createContext, useReducer } from "react";
import "./App.css";
import { Layout } from "antd";
import Store from "../Store";
import { reducer } from "../reducers/reducer";
import SmurfList from "./smurf/SmurfList";
import SmurfForm from "./forms/SmurfForm";

const App = () => {
  const [smurfs, dispatch] = useReducer(reducer);

  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Store.Provider value={dispatch}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <div className="logo">Todo's Reducer</div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            {/* <SmurfForm /> */}
          </Sider>

          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <SmurfList smurfs={smurfs} />
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }} />
      </Layout>
    </Store.Provider>
  );
};

export default App;
