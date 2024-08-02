import { useLoaderData, useNavigate, useRevalidator } from "@remix-run/react";
import {
  Button,
  Col,
  Descriptions,
  Dropdown,
  Layout,
  Row,
  Table,
  Typography,
} from "antd";
import {
  HomeOutlined,
  CarOutlined,
  RightOutlined,
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { json, MetaFunction } from "@remix-run/node";

import * as VehiclesApi from "~/api/Vehicles";
import { VehicleModel } from "~/api/Vehicles/interfaces";
import { theme } from "~/components/theme";

const { Header, Content } = Layout;

export const meta: MetaFunction = () => ({
  title: "Listagem de veículos",
});

export const loader = async () => {
  try {
    const vehicles = await VehiclesApi.getAll();

    return json({ vehicles });
  } catch (error) {
    return json({});
  }
};

export default function Index() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const revalidator = useRevalidator();

  const vehicles = (data?.vehicles as Array<VehicleModel>) || [];

  const tableActions = (record: VehicleModel) => {
    return [
      {
        label: "Alterar",
        key: "1",
        icon: <EditOutlined style={{ color: theme.secondary }} />,
        onClick: () => {
          navigate(`/vehicles/${record.id}`);
        },
      },
      {
        label: "Remover",
        key: "2",
        icon: <DeleteOutlined style={{ color: theme.secondary }} />,
        onClick: () => {
          handleDeleteVehicle(record.id!);
        },
      },
    ];
  };

  const handleDeleteVehicle = async (id: number) => {
    await VehiclesApi.remove(id).then(() => {
      revalidator.revalidate();
    });
  };

  return (
    <Layout>
      <Header>
        <Row justify="space-between" align="middle">
          <Col span={12}>
            <Typography.Title>Veículos cadastrados</Typography.Title>
          </Col>
          <Col span={12}>
            <Row gutter={24} justify="end" style={{ width: "100%" }}>
              <Button
                icon={<HomeOutlined style={{ fontSize: 20 }} />}
                type="link"
                shape="circle"
                href="/"
              />
              <Button
                icon={<CarOutlined style={{ fontSize: 20 }} />}
                type="link"
                href="/vehicle"
                shape="circle"
              />
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        <Table
          dataSource={vehicles}
          rowKey="id"
          columns={[
            {
              title: "Placa",
              dataIndex: "placa",
              key: "placa",
            },
            {
              title: "Tipo",
              dataIndex: "tipo",
              key: "tipo",
            },
            {
              title: "Modelo",
              dataIndex: "modelo",
              key: "modelo",
            },
            {
              title: "Ano",
              dataIndex: "ano",
              key: "ano",
            },
            Table.EXPAND_COLUMN,
            {
              title: "",
              dataIndex: "actions",
              key: "actions",
              align: "center",
              render: (_, record) => (
                <div className="action-icons">
                  <Dropdown
                    trigger={["click"]}
                    menu={{ items: tableActions(record) }}
                    placement="top"
                    arrow
                  >
                    <MoreOutlined />
                  </Dropdown>
                </div>
              ),
            },
          ]}
          expandable={{
            expandIcon: ({ expanded, onExpand, record }) => (
              <>
                {record?.descricao && (
                  <RightOutlined
                    onClick={(e) => onExpand(record, e)}
                    rotate={expanded ? 90 : 0}
                    style={{
                      fontSize: "12px",
                      color: theme.secondary,
                    }}
                  />
                )}
              </>
            ),
            expandedRowRender: (record: VehicleModel) => (
              <Descriptions layout="vertical" colon={false}>
                <Descriptions.Item label="Descrição">
                  {record?.descricao}
                </Descriptions.Item>
              </Descriptions>
            ),
            rowExpandable: (record) => !!record?.descricao,
          }}
        />
      </Content>
    </Layout>
  );
}
