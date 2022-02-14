const colors = {
  primary: '#000',
  modalBackground:'rgba(0, 0, 0, 0.4)',
  gray: '#808080',
  borderBottom: '#C4C4C4',
  disableGray: '#CCCCCC',
  background: '#F1F3F4',
  white: '#fff',
  red: '#FF5757',
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
