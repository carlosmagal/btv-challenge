import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { Button, Col, Input, Layout, Row, Typography } from "antd";
import { HomeOutlined, CarOutlined } from "@ant-design/icons";
import { ActionArgs, json, redirect } from "@remix-run/node";
import type { LoaderArgs, MetaFunction } from "@remix-run/node";

import * as VehiclesApi from "~/api/Vehicles";
import { VehicleModel } from "~/api/Vehicles/interfaces";

const { Header, Content } = Layout;

export const meta: MetaFunction = () => ({
  title: "Edição de veículo",
});

export const loader = async ({ params }: LoaderArgs) => {
  try {
    const { id } = params;
    const vehicle = await VehiclesApi.getById(Number(id));

    return json({ ...vehicle });
  } catch (error) {
    return json({});
  }
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const placa = formData.get("placa");
  const tipo = formData.get("tipo");
  const descricao = formData.get("descricao");
  const modelo = formData.get("modelo");
  const ano = formData.get("ano");
  const id = Number(formData.get("id"));

  const vehicle = { placa, tipo, descricao, modelo, ano, id };

  try {
    await VehiclesApi.update(vehicle as VehicleModel);

    return redirect("/");
  } catch (error) {
    return json({ success: false });
  }
};

export default function UpdateVehicle() {
  const data = useActionData();
  const vehicle = useLoaderData();
  const submit = useSubmit();

  return (
    <Layout>
      <Header>
        <Row justify="space-between" align="middle">
          <Col span={12}>
            <Typography.Title>Edição de veículo</Typography.Title>
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
        {data?.success === false && (
          <span className="error-status-color">Erro ao editar veículo</span>
        )}
        <Form
          method="put"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as any);

            formData.append("id", vehicle?.id);
            submit(formData, { method: "PUT" });
          }}
        >
          <Row gutter={24}>
            <Col span={6}>
              <label htmlFor="placa">Placa</label>
              <Input
                size="small"
                type="text"
                required
                name="placa"
                defaultValue={vehicle?.placa}
              />
            </Col>

            <Col span={6}>
              <label htmlFor="tipo">Tipo</label>
              <Input
                size="small"
                type="text"
                required
                name="tipo"
                defaultValue={vehicle?.tipo}
              />
            </Col>

            <Col span={6}>
              <label htmlFor="modelo">Modelo</label>
              <Input
                size="small"
                type="text"
                required
                name="modelo"
                defaultValue={vehicle?.modelo}
              />
            </Col>

            <Col span={6}>
              <label htmlFor="ano">Ano</label>
              <Input
                size="small"
                type="text"
                required
                name="ano"
                defaultValue={vehicle?.ano}
              />
            </Col>

            <Col span={24}>
              <label htmlFor="descricao">Descrição</label>
              <Input.TextArea
                size="small"
                name="descricao"
                rows={4}
                defaultValue={vehicle?.descricao}
              />
            </Col>
          </Row>

          <Row justify="end" style={{ marginTop: 32 }}>
            <Button onClick={() => {}} htmlType="submit" type="primary">
              Cadastrar
            </Button>
          </Row>
        </Form>
      </Content>
    </Layout>
  );
}
