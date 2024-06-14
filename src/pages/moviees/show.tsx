import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Typography } from "antd";

const { Title, Text } = Typography;

export const FilmShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Director</Title>
      <Text>{record?.director}</Text>

      <Title level={5}>Duration</Title>
      <Text>{record?.duration} minutes</Text>
    </Show>
  );
};