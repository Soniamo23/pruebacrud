import { useShow, useOne } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Typography } from "antd";

const { Title, Text } = Typography;

export const CharacterShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: sceneData, isLoading: sceneIsLoading } = useOne({
    resource: "scene",
    id: record?.scene_id || "",
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

      <Title level={5}>Cost</Title>
      <Text>${record?.cost?.toFixed(2)}</Text>

      <Title level={5}>Stock</Title>
      <Text>{record?.stock}</Text>

      <Title level={5}>Scene</Title>
      <Text>{sceneIsLoading ? "Loading..." : sceneData?.data?.description}</Text>
    </Show>
  );
};