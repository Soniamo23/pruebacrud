import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export const FilmEdit = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Title"
          name={["title"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Director" name={["director"]}>
          <Input />
        </Form.Item>
        <Form.Item label="Duration (minutes)" name={["duration"]}>
          <InputNumber min={0} />
        </Form.Item>
      </Form>
    </Edit>
  );
};