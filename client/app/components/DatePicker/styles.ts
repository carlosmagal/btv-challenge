import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

const AntDatePicker = createGlobalStyle`
  .ant-input-datepicker{
    width: 100%;
  }
  .ant-picker {
    background-color: ${theme.inputBackground} !important;
    border-radius: 4px !important;
    color: black !important;
    height: 36px;
    border: none;
  }
  .ant-picker-input > input {
    color: black !important;
    font-weight: 400;
    font-size: 14px;
  }
  .ant-picker-input > input::placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
    font-weight: 400;
    font-size: 12px;
  }
  
  .ant-picker-suffix {
    color: black !important;
  }
  .ant-picker-focused {
    box-shadow: 0 0 0 2px var(--ant-primary-2) !important;
    outline: 0;
  }
  .ant-picker-focused, .ant-picker:hover, .ant-picker-input>input:hover {
    border-color: var(--ant-primary-2) !important;
    border-right-width: 1px;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner:before{
    /* border-color: var(--ant-primary-2) !important; */
    border: 1px solid var(--ant-primary-2) !important;
  }
  .ant-picker-today-btn {
    color: black !important;
  }
  .ant-picker-header-view button:hover, .ant-picker-header-view button:hover {
    color: black !important;
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner{
    background-color: #000066db !important;
  }
  .ant-picker.ant-picker-disabled{
    color: #80AAA5 !important;
  }

`;

export default AntDatePicker;
