import React, { useEffect, useState } from "react";
import { Space, Table, Typography } from "antd";
import { getOrders } from "../../api";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      console.log(res);
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: " Title",
            dataIndex: "title",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: " Total",
            dataIndex: "total",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "DiscountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default Orders;
