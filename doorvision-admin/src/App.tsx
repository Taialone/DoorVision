import { ConfigProvider } from 'antd';
import AdminLayout from './components/layout/AdminLayout';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
        },
      }}
    >
      <AdminLayout>
        <DashboardPage />
      </AdminLayout>
    </ConfigProvider>
  );
}

export default App;
