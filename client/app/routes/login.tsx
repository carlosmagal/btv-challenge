import { Button, Input } from "antd";
import {
  ActionArgs,
  json,
  LoaderArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { z } from "zod";

import * as AuthApi from "../api/Auth";
import * as UsersApi from "../api/Users";

import * as S from "../styles/login";

import Logo from "../assets/images/logo.svg";
import Background from "../assets/images/login-backgroud.jpg";
import { UserModel } from "~/api/Auth/interfaces";
import { toast } from "react-toastify";

export const meta: MetaFunction = () => ({
  title: "Login",
});

export const loader = async () => {
  try {
    await UsersApi.getAll();

    return redirect("/");
  } catch (error) {
    return json({});
  }
};

const schema = z.object({
  username: z.string({ required_error: "Campo obrigatório" }),
  password: z.string().min(4, { message: "Senha muito curta." }),
});

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const user = { username, password };

  const validation = schema.safeParse(user);

  if (!validation.success) {
    const errors = validation.error.errors.map((e) => ({
      field: e.path.at(0),
      message: e.message,
    }));

    return json({ hasError: true, errors });
  }

  try {
    const response = await AuthApi.login(user as UserModel);

    return json({
      hasError: false,
      data: response,
    });
  } catch (error) {
    toast.error("Erro ao realizar login");
    return json({
      hasError: true,
      errors: [{ field: "username", message: "Credenciais inválidas" }],
    });
  }
};

export default function Login() {
  const data = useActionData();
  const navigate = useNavigate();

  const usernameError = data?.hasError
    ? data?.errors?.find((e: { field: string }) => e.field === "username")
        ?.message
    : "";
  const passwordError = data?.hasError
    ? data?.errors?.find((e: { field: string }) => e.field === "password")
        ?.message
    : "";

  if (data?.hasError === false) {
    window.localStorage.setItem("token", data.data.token);
    navigate("/");

    // return <div />;
  }

  return (
    <S.LoginContainer>
      <img src={Background} className="image-side" alt="login" />

      <S.FieldsContainer className="d-flex flex-column">
        <img
          src={Logo}
          alt="logo"
          className="logo"
          width={200}
          style={{ alignSelf: "center" }}
        />

        <S.Container className="d-flex justify-content-center">
          <Form
            method="post"
            autoComplete="off"
            className="d-flex flex-column inputs"
            style={{ width: "50%" }}
          >
            <label htmlFor="username">Usuário</label>
            <Input size="small" type="text" required name="username" />
            <span className="error-status-color">{usernameError}</span>

            <label htmlFor="password">Senha</label>
            <Input
              variant="outlined"
              type="password"
              size="small"
              name="password"
              required
            />
            <span className="error-status-color">{passwordError}</span>

            <Button
              type="primary"
              htmlType="submit"
              // loading={loading}
              style={{
                width: "40%",
                alignSelf: "center",
                color: "white",
                boxShadow: "none",
              }}
            >
              Entrar
            </Button>
          </Form>
        </S.Container>
      </S.FieldsContainer>
    </S.LoginContainer>
  );
}
