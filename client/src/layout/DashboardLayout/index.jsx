import React from "react";

import DefaultLayout from "../DefaultLayout";
import HeaderContent from "../HeaderContent";

import { Layout } from "antd";

const { Content } = Layout;

export default function DashboardLayout({ children }) {
  return (
    <Layout className="site-layout">
      <HeaderContent />
      <Content
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingLeft: "40px",
          paddingRight: "40px",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
