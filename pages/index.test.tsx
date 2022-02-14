import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

test('Home 페이지가 렌더됨', () => {
  render(<Home />);
});
