export interface ThemeModel {
  styled?: string;
  outline?: boolean;
}

export const antVariables = {
  errorColor: "#FF4D4F",
  infoColor: "#1890FF",
  primaryColor: "rgba(0, 0, 102, 0.88)",
  secondaryColor: "#00995D",
  processingColor: "#7AC0A0",
  successColor: "#52C41A",
  warningColor: "#FAAD14",
};

export const theme = {
  primary: "rgba(0, 0, 102, 0.5)",
  secondary: antVariables.primaryColor,
  tertiary: "#DDEDE1",
  accent: "#B1D34B",
  danger: "#ED1651",
  warning: "#F47920",
  success: "#18e683",
  info: antVariables.processingColor,
  gray: "#454545",
  background: "#E5E5E5",
  headerBackground: "#FFFFFF",
  inputBackground: "#F6F6F6",
  neutral: "#FFFFFF",
  expandedBackground: "#EFEFEF",
  orange3: "#993300",
  stepperTail: "#DBDBDB",
  grayNeutral: "#A1A1A1",
};
