import GlobalStyle from './globalStyles';
import AntInput from './Input/styles';
import AntFormItem from './FormItem/styles';
import AntDatePicker from './DatePicker/styles';
import AntSwitch from './Switch/styles';
import AntButton from './Button/styles';
import AntSelect from './Select/styles';
import AntSpin from './Spin/styles';
import AntCard from './Card/styles';
import AntTable from './Table/styles';
import AntPagination from './Pagination/styles';
import AntTypography from './Typography/styles';
import AntRadio from './Radio/styles';
import AntTabs from './Tabs/styles';

export default function StylesHolder() {
  return (
    <>
      <AntInput />
      <GlobalStyle />
      <AntFormItem />
      <AntDatePicker />
      <AntSwitch />
      <AntButton />
      <AntCard/>
      <AntSelect />
      <AntSpin />
      <AntTable />
      <AntPagination />
      <AntTypography />
      <AntRadio />
      <AntTabs />
    </>
  );
}
