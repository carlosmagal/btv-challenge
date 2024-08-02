import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/pt_BR";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StylesHolder from "./components/stylesHolder";
import { theme } from "./components/theme";

import styles from "./app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Desafio Bem-te-vi",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body suppressHydrationWarning={true}>
        <ConfigProvider locale={locale}>
          <ThemeProvider theme={theme}>
            {/* <ToastContainer hideProgressBar autoClose={5000} /> */}
            <StylesHolder />
            <ScrollRestoration />
            <Scripts />
            <Outlet />
          </ThemeProvider>
          <LiveReload />
        </ConfigProvider>
      </body>
    </html>
  );
}
