import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ButtonAdd = () => {
  return (
    <Button
      type="primary"
      shape="circle"
      size="large"
      icon={<PlusOutlined />}
    />
  );
};

export default ButtonAdd;
