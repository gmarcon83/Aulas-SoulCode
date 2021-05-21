import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Dashboard() {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header className="header">
          <div className="logo">img</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key={1}>Dashboard</Menu.Item>
            <Menu.Item key={2}>Clientes</Menu.Item>
            <Menu.Item key={3}>Usuários</Menu.Item>
          </Menu>
        </Header>

        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
                <Menu.Item key="1">Listar</Menu.Item>
                <Menu.Item key="2">Inserir</Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Clientes">
                <Menu.Item key="3">Listar</Menu.Item>
                <Menu.Item key="4">Inserir</Menu.Item>
              </SubMenu>

              <SubMenu key="sub3" icon={<AreaChartOutlined />} title="Gráficos">
                <Menu.Item key="5">Projetos em Andamento</Menu.Item>
                <Menu.Item key="6">Projetos Finalizados</Menu.Item>
                <Menu.Item key="7">Retorno Colaboradores</Menu.Item>
                <Menu.Item key="8">Metas de Projetos</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>ordemservico</Breadcrumb.Item>
            <Breadcrumb.Item>clientes</Breadcrumb.Item>
            <Breadcrumb.Item>inserir</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Espaço do conteúdo
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
