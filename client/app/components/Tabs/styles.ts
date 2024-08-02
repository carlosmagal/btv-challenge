import { createGlobalStyle } from 'styled-components';

const AntTabs = createGlobalStyle`
    .ant-tabs-card.ant-tabs-top>.ant-tabs-nav .ant-tabs-tab, .ant-tabs-card.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-tab {
        border-radius: 8px 8px 0 0;
    }
    .ant-tabs-tab-active {
        color: var(--ant-primary-color);
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn, 
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:hover,
    .ant-tabs-tab-btn:focus {
        border-color: var(--ant-primary-color);
        color: var(--ant-primary-color);
        text-shadow: 0 0 .25px currentcolor;
    }
    .ant-tabs-tab:hover {
        color: var(--ant-primary-color);
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: var(--ant-primary-color);
    }   

`;

export default AntTabs;
