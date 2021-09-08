import React from "react";
import { Form, Input } from "antd";
import DynamicForm from "./DynamicForm"
export default function ProductForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Бүтээгдэхүүний нэр"
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
        label="Тайлбар"
        name="additional_info"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Үнэ"
        name="cost"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Тоо"
        name="unit"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Нэгжийн төрөл"
        name="unit_type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Нэмэлт мэдээлэл"
        name="properties"
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
