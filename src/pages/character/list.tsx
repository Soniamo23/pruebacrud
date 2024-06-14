import { List, useTable, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const CharacterList = () => {
  const { tableProps } = useTable();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          dataIndex="cost"
          title="Cost"
          render={(value: number) => (
            <span>${value.toFixed(2)}</span>
          )}
        />
        <Table.Column dataIndex="stock" title="Stock" />
        <Table.Column
          dataIndex="scene_id"
          title="Scene"
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