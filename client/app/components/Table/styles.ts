import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

const AntTable = createGlobalStyle`
  .ant-table {
    .ant-table-thead tr th {
      /* background: ${theme.grayNeutral} !important; */
      color: black !important;
      font-weight: 400;
    }
    .ant-table-row-expand-icon {
      color: var(--ant-primary-color) !important;
    }
    .ant-table-cell {
      color: ${theme.gray};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }

    .ant-table-column-sorter-inner{
      display: none;
    }
  }
  .primaryInformationTable{
    .ant-table-thead tr th {
      background: ${theme.primary} !important;
      color: white !important;
    }

  }
 
`;

export default AntTable;
