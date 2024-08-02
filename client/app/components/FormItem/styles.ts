import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

const AntFormItem = createGlobalStyle`
  .ant-form-item{
    .ant-form-item-label label {
      color: ${theme.gray} !important;
      font-family: 'Roboto';
      font-style: normal !important;
      font-weight: 400 !important;
      font-size: 14px !important;
      line-height: 19px !important;
    }
    .ant-form-item-label {
      padding: 0 0 4px;
    }
    /* .ant-form-item-control-input-content {
      display: flex !important;
    } */
  }
`;

export default AntFormItem;
