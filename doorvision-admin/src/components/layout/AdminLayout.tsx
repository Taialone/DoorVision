import React, { useState } from 'react';
import { Layout, Menu, Typography, theme } from 'antd';
import {
  DashboardOutlined,
  TeamOutlined,
  HomeOutlined,
  FileTextOutlined,
  SettingOutlined,
  BuildOutlined,
  SketchOutlined,
  CrownOutlined,
  ToolOutlined,
  DollarOutlined,
  CalculatorOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const menuItems = [
  { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: 'users', icon: <TeamOutlined />, label: 'Người dùng' },
  { key: 'customers', icon: <TeamOutlined />, label: 'Khách hàng' },
  { key: 'projects', icon: <HomeOutlined />, label: 'Công trình' },
  {
    key: 'materials',
    icon: <SettingOutlined />,
    label: 'Danh mục vật tư',
    children: [
      { key: 'door-types', icon: <BuildOutlined />, label: 'Loại cửa' },
      { key: 'aluminum-systems', icon: <SketchOutlined />, label: 'Hệ nhôm' },
      { key: 'glass-types', icon: <CrownOutlined />, label: 'Loại kính' },
      { key: 'accessories', icon: <ToolOutlined />, label: 'Phụ kiện' },
      { key: 'material-prices', icon: <DollarOutlined />, label: 'Bảng giá' },
    ],
  },
  { key: 'calculation-rules', icon: <CalculatorOutlined />, label: 'Công thức tính' },
  { key: 'quotations', icon: <FileTextOutlined />, label: 'Báo giá' },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="dark"
        width={250}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <SketchOutlined style={{ fontSize: 28, color: '#1677ff', marginRight: collapsed ? 0 : 10 }} />
          {!collapsed && (
            <Text strong style={{ color: '#fff', fontSize: 18, whiteSpace: 'nowrap' }}>
              DoorVision
            </Text>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['aluminum-systems']}
          defaultOpenKeys={['materials']}
          items={menuItems}
          style={{ borderRight: 0 }}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 250, transition: 'margin-left 0.2s' }}>
        <Header
          style={{
            padding: '0 24px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: { fontSize: 20, cursor: 'pointer' },
            onClick: () => setCollapsed(!collapsed),
          })}
          <div style={{ flex: 1 }} />
          <Text type="secondary">Xin chào, Admin</Text>
        </Header>
        <Content
          style={{
            margin: 24,
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
