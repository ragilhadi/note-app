import React from "react";
import "antd/dist/antd.css";
import { Card, Popconfirm } from "antd";

function NoteCard(props) {
  return (
    <Card
      title={props.header}
      extra={
        <Popconfirm
          title="Are you sure？"
          okText="Yes"
          cancelText="No"
          onConfirm={}
        >
          <a href="#">Delete</a>
        </Popconfirm>
      }
      style={{ width: 300 }}
    >
      {props.content}
    </Card>
  );
}

export default NoteCard;
