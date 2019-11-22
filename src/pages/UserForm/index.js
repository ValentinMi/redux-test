import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const UserForm = ({ history }) => {
  const [newUser, setNewUser] = useState({});

  const handleChange = e => {
    switch (e.target.name) {
      case "firstname":
        setNewUser({ ...newUser, firstname: e.target.value });
        break;
      case "name":
        setNewUser({ ...newUser, lastname: e.target.value });
        break;
      case "email":
        setNewUser({ ...newUser, email: e.target.value });
        break;
      default:
        throw new Error("Unknow field");
    }
  };

  const handleSubmit = () => {
    try {
      axios.post("http://goweb.eu.ngrok.io/users", newUser);
    } catch (error) {
      throw error;
    }
    history.push("/users");
  };

  return (
    <Form style={{ width: "50%" }}>
      <Form.Item label="Firstname">
        <Input
          name="firstname"
          onChange={handleChange}
          placeholder="Your firstname"
        />
      </Form.Item>
      <Form.Item label="Name">
        <Input
          name="name"
          onChange={handleChange}
          placeholder="Your family name"
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input name="email" onChange={handleChange} placeholder="Your email" />
      </Form.Item>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

export default UserForm;
