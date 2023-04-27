import React, { useEffect, useState } from "react";
import { Image, Space, Typography, Badge, Drawer, List } from "antd";
import { getComments, getOrders } from "../../api";

import {
  CaretDownFilled,
  BellOutlined,
  RedEnvelopeOutlined,
} from "@ant-design/icons";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });

    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className="AppHeader">
      <Image
        width={70}
        src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png"
      ></Image>
      <Typography.Title>Aerobase Frankline</Typography.Title>
      <Space>
        <Badge count={comments.length}>
          <RedEnvelopeOutlined
            onClick={() => {
              setCommentsOpen(true);
            }}
            style={{ fontSize: 23 }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellOutlined
            onClick={() => setNotificationOpen(true)}
            style={{ fontSize: 23 }}
          />
        </Badge>
        <CaretDownFilled style={{ fontSize: 23 }} />
      </Space>

      <Drawer
        title="comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        {/* <List dataSource={}></List> */}
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationOpen}
        onClose={() => {
          setNotificationOpen(false);
        }}
        maskClosable
      ></Drawer>
    </div>
  );
}

export default AppHeader;
