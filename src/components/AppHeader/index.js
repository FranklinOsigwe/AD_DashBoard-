import React from "react";
import { Image, Space, Typography ,Badge } from "antd";

import {
  CaretDownFilled,
  BellOutlined,
  RedEnvelopeOutlined,
} from "@ant-design/icons";

function AppHeader() {
  return (
    <div className="AppHeader">
      <Image
        width={70}
        src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png"
      ></Image>
      <Typography.Title>Aerobase Frankline</Typography.Title>
      <Space>
        <Badge count={3}>
          <RedEnvelopeOutlined style={{ fontSize: 23 }} />
        </Badge>
        <Badge count={12 }>
          <BellOutlined style={{ fontSize: 23 }} />
        </Badge>
        <CaretDownFilled style={{ fontSize: 23 }} />
      </Space>
    </div>
  );
}

export default AppHeader;
