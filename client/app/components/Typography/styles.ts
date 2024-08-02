import { createGlobalStyle } from 'styled-components';

const AntTypography = createGlobalStyle`
  .ant-typography a, a.ant-typography{
    color: var(--ant-primary-color);
  }

  .ant-typography a:focus, .ant-typography a:hover, a.ant-typography:focus, a.ant-typography:hover{
    color: var(--ant-primary-color-hover);
  }
`;

export default AntTypography;
