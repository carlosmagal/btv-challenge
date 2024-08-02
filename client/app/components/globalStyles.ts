import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    min-height: 100vh;
    /* overflow: hidden; */
    font-family: 'Roboto', sans-serif;
    background: ${theme.background};
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
  }

  textarea {
    resize: none !important;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: ${theme.background};
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  ::-webkit-scrollbar {
    /* width: 0.5em; */
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #cfcfcf;
    width: 9px;
    background: #C4C4C4;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    /* background: ${theme.gray}; */
    background: #33312b;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    /* background: #707070; */
    background: #33312b;
  }

  @media (max-width: 768px) {
    .remove-from-sm-screen {
      display: none;
    }
  }

  /* .ant-form-item-required::before {
    content: '' !important;
  } */

  .ant-table {
    border-radius: 6px;

    thead > tr:first-child > th:first-child {
      border-top-left-radius: 6px !important;
    }

    thead > tr:last-child > th:last-child {
      border-top-right-radius: 6px !important;
    }
  }

  .ant-steps-item-disabled>.ant-steps-item-container>.ant-steps-item-icon {
    background-color: rgba(10, 95, 85, 0.8) !important;
    border-color: rgba(10, 95, 85, 0.8) !important;
  }

  .ant-steps-item-title {
    font-size: 12px !important;
    font-weight: bold !important;
    text-decoration: underline !important;
    color: ${theme.secondary} !important;

    &:hover {
      color: ${theme.secondary} !important;
    }
  }


  #transportValuesTable.ant-table .ant-table-thead tr th, #cancelAttendanceTable.ant-table .ant-table-thead tr th, #questionTable.ant-table .ant-table-thead tr th {
    background: ${theme.primary} !important;
  }

  .jwaMTm .ant-descriptions {
    padding: 30px;
}


  .ant-layout {
    min-height: 100vh !important;
  }

  .ant-table-thead {
    border-radius: 6px 6px 6px 6px;
  }
  .ant-layout-content {
    padding: 32px !important;
    background-color: #fff;
  }

  .ant-layout-header {
    height: 60px !important;
    display: flex;
    align-items: center;
    background-color: ${theme.secondary} !important;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100% !important;

    h1 {
      color: #fff;
      margin-bottom: 0;
    }
  }
 
  .drawer-input {
    background-color: ${theme.inputBackground};
    margin-bottom: 25px;
    border-radius: 4px;
    color: var(--ant-primary-color);
    font-weight: 700;
    height: 38px;

    ::placeholder {
      color: var(--ant-primary-color);
    }
  }

  .ant-table-wrapper {
    margin-top: 24px;
  }

  .ant-collapse-item {
    background-color: white !important;
    border-radius: 6px !important;
  }

  .ant-collapse-header {
    justify-content: space-between;
    height: 87px !important;
    align-items: center !important;
  }

  .ant-collapse-borderless {
    background-color: ${theme.background} !important;
  }

  .ant-collapse {
    border-radius: 8px;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }

  .ant-collapse {
    .data-panel {
      margin-bottom: 5px;
    }

    .contact-panel {
      margin-bottom: 5px;
    }
  }


  .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-extra {
    margin-left: 0;
  }

  [data-theme='compact'] .site-collapse-custom-collapse .site-collapse-custom-panel,
  .site-collapse-custom-collapse .site-collapse-custom-panel {
    margin-bottom: 5px;
    overflow: hidden;
    background: ${theme.background};
    border-radius: 2px;
  }

  //NOTE: mudanca no overflow
  [data-theme='compact'] .site-collapse-custom-collapse .site-collapse-custom-panel2,
  .site-collapse-custom-collapse .site-collapse-custom-panel2 {
    margin-bottom: 5px;
    overflow: visible;
    background: ${theme.background};
    border-radius: 2px;
  }

  .ant-collapse-header-border-bottom {
    .ant-collapse-header {
      border-bottom: 1px solid #DBDBDB !important;
    }
  }

  .ant-progress-inner {
    background-color: white
  }

  .app-modal {
    .ant-modal-content,
    .ant-modal-header {
      border-radius: 4px;
    }

    .ant-modal-content {
      .ant-btn-ghost {
        border: 1px solid ${theme.primary} !important;
        color: ${theme.primary} !important;
      }
    }

    .ant-modal-body {
        /* background-color: ${theme.background}; */
      max-height: 600px;
      overflow-y: auto;
    }
  }

  .ant-descriptions-item{
    padding-bottom: 12px !important;
  }

  .ant-descriptions-item-label {
    color: #000000db !important;
    font-weight: 700 !important;
  }

  .ant-descriptions-item-content {
    color: ${theme.gray};
    white-space: pre-wrap;
  }

  /* .ant-layout-sider {
    min-width: 250px !important;
  } */

  .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark, .ant-menu.ant-menu-dark .ant-menu-sub {
    background: var(--ant-primary-color);
  }

  .ant-menu-item {
    color: #FFFFFF !important;
    margin: 0 !important;
    height: 80px !important;
    padding: 12px !important;
    border-radius: 0px !important;
    width: 100% !important;

    &:hover {
      /* background-color: black !important; */
      opacity:.5;
    }
  }

  .ant-menu-title-content {
    a {
      color: #FFFFFF !important;
      font-weight: 400 !important;
    }
  }

  .ant-menu-inline {
    background: var(--ant-primary-color) !important;

    svg {
      display: none;
    }
  }

  .ant-menu-submenu-open {
    background: ${theme.primary} !important;
  }

  .ant-menu-item-selected {
    background: rgba(255, 255, 255, 0.4) !important;
    border-radius: 0px !important;
    width: 100% !important;

    &:hover{
      opacity: 1;
    }
  }

  .ant-float-btn-body {
    background-color: #000066 !important;
  }

  .ant-menu-submenu {
    margin: 0;
    color: #FFFFFF;
  }

  .submenu-item {
    padding-left: 0 !important;
  }

  .ant-menu-title-content {
    height: fit-content !important;
    white-space: normal !important;
    line-height: initial !important;
    padding: 5px 0 !important;
    width: max-content !important;
    color: #fff;
    font-size: 1rem;
    margin-top: 5px;
  }

  .menu-break-line {
    height: auto !important;
    white-space: normal !important;
    line-height: initial !important;
  }

  .ant-row {
    width: 100%;
  }

  .active-items {
    color: ${theme.primary};
    font-weight: bold;
  }

  .inactive-items {
    color: ${theme.danger};
    font-weight: bold;
  }

  .ant-input-number, .ant-form-item-control-input-content {
    width: 100%;
  }

  .ant-btn-ghost:hover, .ant-btn {
    border-color: ${theme.primary} !important;
  }

  .search-custom-btn {
    .ant-input-affix-wrapper {
      border-radius: 4px !important;
      height: 48px !important;
    }

    .ant-input {
      color: var(--ant-primary-color);
      font-weight: 700;

      ::placeholder {
        color: var(--ant-primary-color);
        font-weight: 600;
      }
    }

    .ant-input-wrapper.ant-input-group {
      .ant-input-affix-wrapper {
        align-items: center;
        border: none;
        background-color: ${theme.inputBackground} !important;

        input {
          background-color: ${theme.inputBackground} !important;
        }
      }
    }

    button {
      height: 48px;
      width: 48px;
      border-radius: 50% !important;
      color: ${theme.primary} !important
    }
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    border-radius: 0 50% 50% 0 !important;
    background-color: ${theme.inputBackground} !important;
  }

  .form-button {
    display: flex;
    justify-content: space-around;
  }

  .select-custom-dropdown {
    .ant-select-arrow,
    .ant-select-clear {
      background-color: ${theme.primary};
      border-radius: 50%;
      height: 48px;
      width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 6px;
      right: -15px;
      color: white;
    }

    .ant-select-selector {
      background-color: ${theme.inputBackground} !important;
      border-radius: 4px !important;
      border: none !important;
      height: 48px !important;
      color: var(--ant-primary-color);

      input {
        height: 48px !important;
        color: var(--ant-primary-color);
        font-weight: 600;
      }

      .ant-select-selection-placeholder, .ant-select-selection-item {
        align-self: center !important;
        color: var(--ant-primary-color);
        font-weight: 600;
      }
    }
  }

  tr.ant-table-expanded-row:hover > td, tr.ant-table-expanded-row > td {
    background: ${theme.expandedBackground};
    border: .5px solid #CBC9CD;
  }

  /* .ant-table-expanded-row{
    border: none !important;
  } */

  .input-span-error {
    color: var(--ant-error-color);
    font-size: 12px;
  }

  .ant-picker.ant-input-status-error {
    border-color: var(--ant-error-color-hover);
    box-shadow: 0 0 0 1.1px var(--ant-error-color-hover);
    border-right-width: 1px;
    outline: 0;
  }

  .ant-upload {
    width: 100% !important;
    height: 100% !important;
    margin-bottom: 0 !important;
  }

  /* .ant-input-number.ant-input-status-error {
    border-color: var(--ant-error-color-hover);
    box-shadow: 0 0 0 1.1px var(--ant-error-color-hover);
    border-right-width: 1px;
    outline: 0;
  } */

  .spin-full-page {
    max-height: 100% !important;
    width: 100% !important;
  }

  .w-600 {
    width: 600px !important;
  }

  .table-form-title {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
  }

  .menu-header-btn {
    border: none !important;
    box-shadow: none !important;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inactive-records {
    color: ${theme.danger};
    font-weight: bold;
  }

  .active-records {
    color: ${theme.success};
    font-weight: bold;
  }

  .expanded-button {
    width: 280px;
    display: flex;
    font-size: 14px;
    align-items: flex;
    color: ${theme.primary};
    font-weight: 600;

    span:hover {
      text-decoration: underline;
      cursor: pointer;
    }

  }

  .check-box-in-select {
    background-color: white !important;

    .ant-select-item-option-state {
      color: red !important;
      display: none !important;
    }
  }

  .ant-checkbox-inner {
    border-radius: 4px !important;
  }

  .custom-attendance-collapse {
    .ant-collapse-header {
      background-color: ${theme.tertiary} !important;
      color: ${theme.secondary} !important;
      height: 48px !important;
      padding-left: 6px !important;
    }
  }

  .report-progress {
    .ant-progress-bg {
      height: 28px !important;
    }
  }

  .drawer-w-50{
    .ant-drawer-content-wrapper{
      width: 50% !important;
    }
  }

  .font-bold {
    font-weight: bold;
  }

  .orange-btn {
    background-color: #F47920;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color: #FFF;
    border-radius: 8px;
  }

  .orange-btn:disabled{
    opacity: .4;
    cursor: not-allowed;
  }

  .red-btn {
    background-color: #ad0c00;
  }

  .ant-divider {
    background-color: rgba(0, 0, 0, 0.3) !important;
    margin: 12px 0;
  }

`;

export default GlobalStyle;
