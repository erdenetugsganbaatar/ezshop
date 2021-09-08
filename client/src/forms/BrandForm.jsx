import React from "react";
import { Form, Input } from "antd";

export default function ProductForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Brand Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="desc"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
