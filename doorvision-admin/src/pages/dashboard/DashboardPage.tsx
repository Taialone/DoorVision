import React from 'react';
import { Row, Col, Card, Statistic, Table, Tag, Typography, Space } from 'antd';
import {
  TeamOutlined,
  HomeOutlined,
  FileTextOutlined,
  DollarOutlined,
  RiseOutlined,
  SketchOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const recentQuotations = [
  { id: 'BQ-001', customer: 'Nguyễn Văn A', project: 'Nhà phố Q.7', total: 28500000, status: 'sent' },
  { id: 'BQ-002', customer: 'Trần Thị B', project: 'Biệt thự Thủ Đức', total: 52000000, status: 'draft' },
  { id: 'BQ-003', customer: 'Lê Văn C', project: 'Văn phòng Tân Bình', total: 18300000, status: 'approved' },
];

const statusMap: Record<string, { color: string; label: string }> = {
  draft: { color: 'default', label: 'Nháp' },
  sent: { color: 'blue', label: 'Đã gửi' },
  approved: { color: 'green', label: 'Đã duyệt' },
  rejected: { color: 'red', label: 'Từ chối' },
};

const columns = [
  { title: 'Mã báo giá', dataIndex: 'id', key: 'id' },
  { title: 'Khách hàng', dataIndex: 'customer', key: 'customer' },
  { title: 'Công trình', dataIndex: 'project', key: 'project' },
  {
    title: 'Tổng tiền',
    dataIndex: 'total',
    key: 'total',
    render: (v: number) => v.toLocaleString('vi-VN') + '₫',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (s: string) => (
      <Tag color={statusMap[s]?.color}>{statusMap[s]?.label}</Tag>
    ),
  },
];

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Title level={4} style={{ marginBottom: 20 }}>
        Tổng quan
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="Khách hàng"
              value={12}
              prefix={<TeamOutlined />}
              suffix="khách"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="Công trình"
              value={18}
              prefix={<HomeOutlined />}
              suffix="công trình"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="Báo giá"
              value={24}
              prefix={<FileTextOutlined />}
              suffix="báo giá"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="Doanh thu"
              value={890}
              prefix={<DollarOutlined />}
              suffix="triệu"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Báo giá gần đây">
            <Table
              dataSource={recentQuotations}
              columns={columns}
              rowKey="id"
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Thống kê nhanh">
            <Space direction="vertical" style={{ width: '100%' }} size={16}>
              <div>
                <Space>
                  <SketchOutlined style={{ fontSize: 20, color: '#1677ff' }} />
                  <span>Hệ nhôm đang dùng</span>
                </Space>
                <div style={{ fontSize: 24, fontWeight: 600, marginTop: 4 }}>4 hệ</div>
              </div>
              <div>
                <Space>
                  <RiseOutlined style={{ fontSize: 20, color: '#52c41a' }} />
                  <span>Tăng trưởng tháng</span>
                </Space>
                <div style={{ fontSize: 24, fontWeight: 600, marginTop: 4, color: '#52c41a' }}>
                  +12.5%
                </div>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
