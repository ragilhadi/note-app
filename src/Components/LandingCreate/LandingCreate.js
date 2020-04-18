import React, { useState } from "react";
import { Result, Button } from "antd";
import { CompassOutlined } from "@ant-design/icons";

const LandingCreate = () => {
  const [loading, setloading] = useState(false);

  const enterloading = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 700);
  };
  return (
    <Result
      icon={<CompassOutlined />}
      title="Great, Create your first note here"
      extra={
        <Button
          type="primary"
          size="large"
          loading={loading}
          onClick={enterloading}
        >
          Create
        </Button>
      }
    />
  );
};

export default LandingCreate;
