import { ConfigProvider } from 'antd';
import AdminLayout from './components/layout/AdminLayout';
import AluminumSystemsPage from './pages/materials/AluminumSystemsPage';

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
        <AluminumSystemsPage />
      </AdminLayout>
    </ConfigProvider>
  );
}

export default App;
