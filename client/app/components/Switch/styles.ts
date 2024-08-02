import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

const AntSwitch = createGlobalStyle`
  .ant-switch-checked {
    background: ${theme.primary};
  }
`;

export default AntSwitch;
