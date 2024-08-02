import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

const AntSelect = createGlobalStyle`
  .ant-select:not(.select-custom-dropdown) {
    .ant-select-selector {
      background-color: ${theme.inputBackground} !important;
    }
  }

  .ant-select {
    width: 100%;
    height: 36px !important;
  }

  .ant-select-selector {
    border-radius: 4px !important;
    color: var(--ant-primary-color);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    height: 36px !important;
    align-items: center;
    border: 1px solid #d9d9d9 !important;

    input {
      height: 36px !important;
    }
  }

  .ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    color: #80AAA5 !important;
  }

  .ant-select-selection-item {
    //color: var(--ant-primary-color);
    font-weight: 600;
    font-size: 14px;
  }

  .ant-select-selection-placeholder {
    color: var(--ant-primary-color);
    font-weight: 500;
    font-size: 12px;
  }

  /* .ant-select-selection-search-input::placeholder {
    color: rgba(0,0,0,.3);
    font-weight: 400;
    font-size: 13px;
  } */

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: 0 0 0 2px var(--ant-primary-2);
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: var(--ant-primary-color-outline);
  }

  .ant-select.select-with-custom-render {
    width: 100% !important;
  }

  .ant-select.select-with-custom-render .ant-select-selection-item {
    display: flex;
  }

  .ant-select.select-with-custom-render .ant-select-selection-item > span div {
    display: none !important;
  }
`;

export default AntSelect;
