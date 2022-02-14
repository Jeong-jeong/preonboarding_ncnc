const colors = {
  primary: '#323D45',
  gray: '#939FA5',
  blue: '#1565C0',
  skyBlue: '#2196F3',
  lightBlue: '#BBDEFB',
  warning: '#FFA000',
  border: '#E5E5E5',
  white: '#FFF',
  darkGray: '#323D45',
};

const size = {
  buttonWidth: 76,
  buttonHeight: 32,
  borderRadius: 4,
};

const device = {
  mobile: `(max-width: 768px)`,
  desktop: `(max-width: 1440px)`,
};

const gap = {
  base: 4,
};

const theme = {
  colors,
  size,
  gap,
  device,
};

export type Theme = typeof theme;
export default theme;
