import { createGlobalStyle } from "styled-components";

const AntCard = createGlobalStyle`
 .site-card-wrapper{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  width: 100%;
 }

 .ant-card{
  border: 1px solid;
  border-radius:8px;
 }
 .ant-card-body{
  padding:0px
 }
 .card-type-transport{
  position: absolute;
  top: 3px;
 }
`;

export default AntCard;
