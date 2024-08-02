import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

const AntInput = createGlobalStyle`
  .ant-input,
  .ant-input-number,
  .ant-input-number-input {
    color: black !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    height: 36px;
    width: 100%;
    border: none;
  }
  .ant-input:disabled, 
  .ant-input-number-input:disabled,
  .ant-input-number:disabled {
    color: #80AAA5;
  }

  .ant-input .ant-input-disabled {
    color: #80AAA5 !important;
  }

  .ant-input,
  .ant-input-affix-wrapper {
    color: var(--ant-primary-color);
    border-radius: 4px;
    background-color: ${theme.inputBackground};
    height: 36px;
    display: flex;
    align-items: center;
    border: 1px solid #d9d9d9 !important;
    
    input {
      background-color: transparent;
    }
  }
  .ant-input-password-icon.anticon {
    color: var(--ant-primary-color);
  }

  .ant-input-focused,
  .ant-input:focus,
  .ant-input-number-focused,
  .ant-input-number:focus {
    border-color: var(--ant-primary-2);
    box-shadow: 0 0 0 2px var(--ant-primary-2);
    border-right-width: 1px;
    outline: 0;
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
  .ant-input:hover,
  .ant-input-number:hover {
    border-color: var(--ant-primary-2);
    border-right-width: 1px;
  }

  .ant-input::placeholder,
  .ant-input-number-input::placeholder {
    color: rgba(0,0,0,.3);
    font-weight: 400;
    font-size: 13px;
  }

  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused, .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus {
    border-color: var(--ant-error-color-hover);
    box-shadow: 0 0 0 2px var(--ant-error-color-hover);
    border-right-width: 1px;
    outline: 0;
  }

  .ant-input-password {
    height: 36px;
    align-items: center;
    border: none ;
  }
  .ant-input-password.ant-input-affix-wrapper-focused, .ant-input-affix-wrapper:focus {
    border-color: var(--ant-primary-2);
    box-shadow: 0 0 0 2px var(--ant-primary-2);
    border-right-width: 1px;
    outline: 0;
  }
  .ant-input-password.d2-input-password {
    input {
      background-color: white !important;
    }
  }

  .ant-checkbox-input:focus+.ant-checkbox-inner{
    border-color: var(--ant-primary-2);
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--ant-primary-color);
    border-color: var(--ant-primary-2);
  }
  .ant-checkbox-disabled .ant-checkbox-inner {
    opacity: 0.65;
  }

  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input {
    background-color: ${theme.inputBackground};
    border: 1px solid var(--ant-error-color-hover);
  }
  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover{
    background-color: ${theme.inputBackground};
  }

  .ant-input-number-input {
    /* height: 36px;
    font-weight: 700; */
    background-color: ${theme.inputBackground};
  }

  .ant-input-number-handler:hover .ant-input-number-handler-down-inner, .ant-input-number-handler:hover .ant-input-number-handler-up-inner{
    color: var(--ant-primary-color);
  }

  .ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number{
    border-color: var(--ant-error-color-hover);
    box-shadow: 0 0 0 2px var(--ant-error-color-hover);
    border-right-width: 1px;
    outline: 0;
  }

  .ant-input-search .ant-input:focus, .ant-input-search .ant-input:hover{
    border-color: var(--ant-primary-2);
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: 0 0 0 2px var(--ant-primary-2);
  }

  /* .input-red-color {
    color: rgba(237, 22, 81,.7) !important;
  } */

`;

export default AntInput;
