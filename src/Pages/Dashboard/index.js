import React from "react";
import { Typography, Card, Space, Statistic, Table } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DollarCirlceOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <Card>
          <Space direction="horizontal">
            <DashboardCard
              icon={<ShoppingCartOutlined />}
              title={"Orders"}
              value={1234}
            />
            <DashboardCard title={"Orders"} value={1234} />
            <DashboardCard title={"Customer"} value={1234} />
            <DashboardCard title={"Inventory"} value={1234} />
            <DashboardCard title={"Revenue"} value={1234} />
          </Space>
        </Card>
      </Space>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div>
      <Card>
        <Space direction="horizontal">
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </div>
  );
}

const RecentOrders = () => {
  return (
    <Table
      columns={[
        {
          title: "title",
          dataIndex: "title",
        },
        {
          title: "Quantity",
          dataIndex: "quantity",
        },
        {
          title: "Price",
          dataIndex: "discountedPrice",
        },
      ]}
    ></Table>
  );
};

export default Dashboard;
