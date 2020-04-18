import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

function NoteCard(props) {
  return <Card title={props.title}>{props.content}</Card>;
}

export default NoteCard;
