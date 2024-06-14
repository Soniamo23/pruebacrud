import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import { useSelect } from "@refinedev/antd";

export const CharacterCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: sceneSelectProps } = useSelect({
    resource: "scene",
    optionLabel: "description",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};