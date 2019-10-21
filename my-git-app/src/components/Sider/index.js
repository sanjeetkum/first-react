import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import { Route, Link } from 'react-router-dom';
import './index.css';
import Home from '../Home';
import Contact from '../Contact';
import About from '../AboutUs';

const { Header, Content, Footer, Sider } = Layout;

function KDLSider()
 {
  return (
    <div>
      <Header style={{ background: "lightGreen", padding: 0 }} >
      <h1>KANCHI DEEPA LABEL</h1>
      <img className="w3-image" src="https://www.w3schools.com/w3images/jane.jpg" alt="Fashion Blog" />
      </Header>
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="user" /><span>
           <Link to="/" style={{ color: 'white' }}>Home</Link> </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" /><span>
            <Link to="/about" style={{ color: 'white' }}>About Us</Link> </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" /><span>
            <Link to="/contact" style={{ color: 'white' }}>Contact Us</Link> </span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ margin: "24px 16px 0" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <Route path="/" exact component={ Home }/>
        <Route path="/about" exact component={ About }/>
        <Route path="/contact" exact component={ Contact }/>
        </div>
      </Content>
    </Layout>
    
      <Footer style={{ textAlign: "center" }}>
        Kanchi Deepa Label ©2019 Created by KDL
      </Footer>
    </div>
    );
}

export default KDLSider;