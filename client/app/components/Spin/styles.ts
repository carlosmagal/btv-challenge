import { createGlobalStyle } from "styled-components";

const AntSpin = createGlobalStyle`
  .ant-spin{
    color: #000066;

    .ant-spin-dot-item{
      background-color: var(--ant-primary-color);
    }
  }
  .spin-centered{
    :first-child{
      text-align: center;
    }
  }
`;

export default AntSpin;
