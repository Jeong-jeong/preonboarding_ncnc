const colors = {
  primary: '#000',
  modalBackground: 'rgba(0, 0, 0, 0.4)',
  gray: '#808080',
  borderBottom: '#C4C4C4',
  disableGray: '#CCCCCC',
  background: '#F1F3F4',
  white: '#fff',
  red: '#FF5757',
};

const size = {
  baseHeight: 50,
};

const gap = {
  base: 17,
};

const theme = {
  colors,
  size,
  gap,
};

export type Theme = typeof theme;
export default theme;
