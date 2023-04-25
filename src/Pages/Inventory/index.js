import React, { useEffect, useState } from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { getInventory } from "../../api";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      console.log(res);
      setDataSource(res.products);
      setLoading(false)
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },

          {
            title: " Title",
            dataIndex: "title",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: " Stock",
            dataIndex: "stock",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span> 
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
             return <Rate value={rating}  allowHalf disabled/>
           }
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

export default Customers;
