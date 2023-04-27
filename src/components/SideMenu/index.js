import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName)
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className='sideMenuVertical' mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
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
