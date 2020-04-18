import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

function InputeNote() {
  return (
    <div>
      <Input placeholder="Tittle" allowClear />
      <br />
      <br />
      <TextArea
        placeholder="Content"
        allowClear
        autoSize={{ minRows: 10, maxRows: 15 }}
      />
    </div>
  );
}

export default InputeNote;
