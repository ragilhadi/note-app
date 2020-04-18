import React from "react";
import { Result } from "antd";
import { CompassOutlined } from "@ant-design/icons";
import CreateNote from "../CreateNote/CreateNote";

const LandingCreate = (props) => {
  return (
    <Result
      icon={<CompassOutlined />}
      title="Great! Create your first note here"
      extra={<CreateNote onAdd={props.onAdd} />}
    />
  );
};

export default LandingCreate;
