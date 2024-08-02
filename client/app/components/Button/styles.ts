import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

const AntButton = createGlobalStyle`
  .ant-btn {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.05em;
    height: 40px;
    border-radius: 6px;
    color: ${theme.primary} !important;
    border: 1px solid ${theme.primary};
  }

  .ant-btn-text, .ant-btn-link {
    color: ${theme.primary} !important;
    border-radius: 0 !important;
    border: none;
  }

  .ant-btn-primary {
    background: #03008B !important;
    border: none !important;

    span {
      color: white;
    }
  }

  .ant-btn-icon {
    color: #fff;
  }

  .ant-btn-default{
    border-color: #03008B !important;
    color: #03008B !important;
  }

  .ant-btn-primary:focus,
  .ant-btn-primary:hover,
  .ant-btn-primary:active,
  .ant-btn-primary[disabled]:hover {
    border-color: var(--ant-primary-8);
    background-color: var(--ant-primary-8);
  }

  .ant-btn-primary[disabled] {
    background-color: var(--ant-primary-color);
    opacity: 0.5;
  }

  .ant-btn-ghost:focus,
  .ant-btn-ghost:hover,
  .ant-btn-ghost:active,
  .ant-btn-ghost[disabled]:hover {
    color: var(--ant-primary-8);
    border-color: var(--ant-primary-8);
  }
`;

export default AntButton;
