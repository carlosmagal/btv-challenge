import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

const AntPagination = createGlobalStyle`
  .ant-pagination {
    .ant-pagination-item {
      border-radius: 4px;
      a {
        color: ${theme.secondary};
        font-weight: 500;
      }
      
    }
    .ant-pagination-item-active {
      background: #000066; 
      border-radius: 4px;
      border-color: white;
    }
    .ant-pagination-item-active a {
      color: white;
    }

    .ant-pagination-jump-prev
      .ant-pagination-item-container
      .ant-pagination-item-link-icon,
    .ant-pagination-jump-next
      .ant-pagination-item-container
      .ant-pagination-item-link-icon {
      color: ${theme.primary};
    }
    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
      font-size: 10px;
      border-radius: 4px;
    }

    .ant-pagination-item:hover {
      border-color: ${theme.primary};
    }

    .ant-pagination-item a:hover {
      color: black;
      border-color: ${theme.primary};
    }

    .ant-pagination-item-active a:hover {
      color: white;
    }

    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
      font-size: 10px;
      border-radius: 4px;
      color: ${theme.secondary};
    }
    .ant-pagination-next:hover, .ant-pagination-item-link:hover {
      border-color: ${theme.primary};
    }
  }

  .ant-pagination-total-text {
    color: #6C757D;
    font-size: 14px;
    font-weight: 400;
  }

  .ant-pagination ant-table-pagination ant-table-pagination-center{
    position: relative;
  }

  .ant-pagination-total-text {
    position: absolute;
    left: 0;
  }
`;

export default AntPagination;
