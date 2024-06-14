import { List, useTable, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const SceneList = () => {
  const { tableProps } = useTable();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          dataIndex="budget"
          title="Budget"
          render={(value: number) => (
            <span>${value.toFixed(2)}</span>
          )}
        />
        <Table.Column dataIndex="minutes" title="Minutes" />
        <Table.Column
          dataIndex="film_id"
          title="Film"
          render={(value) => <span>{value}</span>}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: any) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};