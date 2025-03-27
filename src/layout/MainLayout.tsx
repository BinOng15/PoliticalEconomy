import React from "react";
import { Layout } from "antd";
import CustomHeader from "./Header";
import CustomFooter from "./Footer";

const { Content } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <CustomHeader />

      {/* Đường gạch ngăn cách màu xanh */}
      <div
        style={{
          height: "4px",
          backgroundColor: "#355486",
        }}
      />

      {/* Nội dung chính */}
      <Content style={{ minHeight: "80vh" }}>{children}</Content>

      {/* Footer */}
      <CustomFooter />
    </Layout>
  );
};

export default MainLayout;