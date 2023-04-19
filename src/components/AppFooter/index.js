import React from "react";
import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel: +123456789" target={"_blank"}>
        +123456789
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        privacy policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        terms of use
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
