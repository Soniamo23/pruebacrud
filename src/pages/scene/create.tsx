import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const SceneCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: filmSelectProps } = useSelect({
    resource: "film",
    optionLabel: "title",
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
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Budget" name={["budget"]}>
          <InputNumber
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
          />
        </Form.Item>
        <Form.Item label="Minutes" name={["minutes"]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item label="Film" name={["film_id"]}>
          <Select {...filmSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};