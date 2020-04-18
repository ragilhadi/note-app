import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import "antd/dist/antd.css";
const { TextArea } = Input;

const CreateNote = (props) => {
  const [visible, setvisible] = useState(false);
  const [note, setNote] = useState({
    tittle: "",
    content: "",
  });

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    console.log(props.onAdd(note));
    // props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setvisible(false);
    e.preventDefault();
  };

  const handleCancel = (e) => {
    setvisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Create
      </Button>
      <Modal
        title="Create a new Note"
        visible={visible}
        onOk={handleOk}
        okText="Create"
        onCancel={handleCancel}
      >
        <div>
          <Input
            name="tittle"
            placeholder="Tittle"
            allowClear
            value={note.tittle}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextArea
            name="content"
            placeholder="Content"
            value={note.content}
            onChange={handleChange}
            allowClear
            autoSize={{ minRows: 10, maxRows: 15 }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreateNote;
