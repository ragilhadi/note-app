import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import InputeNote from "./InputeNote";

const CreateNote = () => {
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    setvisible(false);
  };

  const handleCancel = (e) => {
    setvisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Create a new Note"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InputeNote />
      </Modal>
    </div>
  );
};

export default CreateNote;
