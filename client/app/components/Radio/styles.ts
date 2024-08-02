import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

const AntRadio = createGlobalStyle`

.ant-radio-inner{
  border: 2px solid ${theme.primary} !important;
}

.ant-radio-inner::after {
  background-color: ${theme.primary};
}

.ant-radio-checked .ant-radio-inner {
  border-color: ${theme.primary} !important;
}

.ant-radio-checked .ant-radio-inner:after {
  background-color: ${theme.primary} !important;
}

.ant-radio:hover .ant-radio-inner {
  border-color: ${theme.primary} !important;
}
.ant-radio-input:focus+.ant-radio-inner {
    box-shadow: 0 0 0 2px ${theme.primary} 0.1 !important;
}

.ant-radio-checked:after {
  border: 1px solid ${theme.primary} !important;
}

.ant-radio-input:focus+.ant-radio-inner, .ant-radio-wrapper:hover .ant-radio, .ant-radio:hover .ant-radio-inner {
  border-color: ${theme.primary} !important;
}



.ant-radio-group {
    display: block;
    margin-top: 12px;
    
}
`;

export default AntRadio;