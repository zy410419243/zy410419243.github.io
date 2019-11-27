import React from 'react';
import { commonStyle } from './commonStyle';

const Button = ({ style, children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button style={Object.assign({}, commonStyle, style)} {...rest}>
    {children}
  </button>
);

export default Button;
