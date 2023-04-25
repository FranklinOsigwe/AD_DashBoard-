import React, { useEffect, useState } from "react";
import { Typography, Card, Space, Statistic, Table } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { getOrders, getRevenue } from "../../api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  return (
    <div>
      <Space size={20} direction="vertical">
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

        {/* COME BACK TO THIS PLS....ITS NOT SHOWING THE TABLE */}
        <Space>
          <RecentOrders />
          <DashboardChart />
        </Space>
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

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);
  return (
    <Table
      columns={[
        {
          title: "Title",
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
      loading={loading}
      dataSource={dataSource}
      pagination={false}
    ></Table>
  );
}

function DashboardChart() {
  const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });

      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0,0,1)",
          },
        ],
      };
      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };
  return (
    <Card style={{ width: 500, height: 350 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
}

export default Dashboard;
