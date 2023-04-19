import React from "react";
import { Menu } from "antd";
import { } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'


function SideMenu() {
  const navigate = useNavigate()
  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          navigate(item.key)
        }}
        items={[
          {
            label: "Dashboard",
            key: "/",
          },
          {
            label: "Inventory",
            key: "/inventory",
          },
          {
            label: "Dashboard",
            key: "/dashboard",
          },
          {
            label: "Orders",
            key: "/orders",
          },
          {
            label: "Customers",
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
