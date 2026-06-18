import React from 'react';
import {
  Table,
  Card,
  Button,
  Tag,
  Space,
  Typography,
  Input,
  Statistic,
  Row,
  Col,
} from 'antd';
import {
  PlusOutlined,
  SearchOutlined,
  SketchOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const aluminumSystems = [
  { id: 1, name: 'Xingfa hệ 55', brand: 'Xingfa', code: 'XINGFA_55', status: 'active', profiles: 6 },
  { id: 2, name: 'Xingfa hệ 93', brand: 'Xingfa', code: 'XINGFA_93', status: 'active', profiles: 8 },
  { id: 3, name: 'JMA 65', brand: 'JMA', code: 'JMA_65', status: 'active', profiles: 5 },
  { id: 4, name: 'PMI 55', brand: 'PMI', code: 'PMI_55', status: 'inactive', profiles: 4 },
  { id: 5, name: 'Việt Pháp 60', brand: 'Việt Pháp', code: 'VIETPHAP_60', status: 'active', profiles: 7 },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 70,
  },
  {
    title: 'Tên hệ nhôm',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => (
      <Space>
        <SketchOutlined style={{ color: '#1677ff' }} />
        <span style={{ fontWeight: 500 }}>{text}</span>
      </Space>
    ),
  },
  {
    title: 'Thương hiệu',
    dataIndex: 'brand',
    key: 'brand',
    render: (brand: string) => <Tag color="blue">{brand}</Tag>,
  },
  {
    title: 'Mã',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Số profile',
    dataIndex: 'profiles',
    key: 'profiles',
    align: 'center' as const,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'active' ? 'green' : 'red'}>
        {status === 'active' ? 'Đang dùng' : 'Ngừng dùng'}
      </Tag>
    ),
  },
  {
    title: 'Thao tác',
    key: 'action',
    render: () => (
      <Space>
        <Button type="link" size="small">Sửa</Button>
        <Button type="link" size="small" danger>Xoá</Button>
      </Space>
    ),
  },
];

const AluminumSystemsPage: React.FC = () => {
  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card>
            <Statistic title="Tổng hệ nhôm" value={5} suffix="hệ" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Đang dùng" value={4} suffix="hệ" styles={{ content: { color: '#3f8600' } }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Thương hiệu" value={4} suffix="hãng" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Tổng profile" value={30} suffix="thanh" />
          </Card>
        </Col>
      </Row>

      <Card
        title={
          <Space>
            <SketchOutlined />
            <span>Danh sách hệ nhôm</span>
          </Space>
        }
        extra={
          <Space>
            <Input
              placeholder="Tìm kiếm..."
              prefix={<SearchOutlined />}
              style={{ width: 200 }}
              size="middle"
            />
            <Button icon={<ReloadOutlined />}>Làm mới</Button>
            <Button type="primary" icon={<PlusOutlined />}>
              Thêm hệ nhôm
            </Button>
          </Space>
        }
      >
        <Table
          dataSource={aluminumSystems}
          columns={columns}
          rowKey="id"
          pagination={false}
          bordered
        />
      </Card>
    </div>
  );
};

export default AluminumSystemsPage;
