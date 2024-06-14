import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const CharacterEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: sceneSelectProps } = useSelect({
    resource: "scene",
    optionLabel: "description",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.scene_id,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Description"
          name={["description"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Cost" name={["cost"]}>
          <InputNumber
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
          />
        </Form.Item>
        <Form.Item label="Stock" name={["stock"]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item label="Scene" name={["scene_id"]}>
          <Select {...sceneSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};