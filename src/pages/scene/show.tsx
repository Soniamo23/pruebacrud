import { useShow, useOne } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Typography } from "antd";

const { Title, Text } = Typography;

export const SceneShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: filmData, isLoading: filmIsLoading } = useOne({
    resource: "film",
    id: record?.film_id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>Budget</Title>
      <Text>${record?.budget?.toFixed(2)}</Text>

      <Title level={5}>Minutes</Title>
      <Text>{record?.minutes}</Text>

      <Title level={5}>Film</Title>
      <Text>{filmIsLoading ? "Loading..." : filmData?.data?.title}</Text>
    </Show>
  );
};