import * as React from 'react';

import { SVGProps } from '..';

const LINE = 'round';
const STROKE_WIDTH = '1.5';
const COLOR = '#ECF0F1';

export const CoinsIcon: React.FC<SVGProps> = (props) => (
  <svg {...props} viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.22501 16.3C4.23476 16.3 1.00001 12.875 1.00001 8.65C1.00001 4.42502 4.23476 1 8.22501 1C12.2153 1 15.45 4.42502 15.45 8.65C15.45 12.875 12.2153 16.3 8.22501 16.3Z"
      stroke={props.color ?? COLOR}
      strokeWidth={STROKE_WIDTH}
      strokeLinecap={LINE}
      strokeLinejoin={LINE}
    />
    <path
      d="M10.35 5.93C9.80901 5.49131 9.134 5.25131 8.4375 5.25C6.67715 5.25 5.25 6.7715 5.25 8.65C5.25 10.5285 6.67715 12.05 8.4375 12.05C9.1549 12.05 9.81705 11.7967 10.35 11.37"
      stroke={props.color ?? COLOR}
      strokeWidth={STROKE_WIDTH}
      strokeLinecap={LINE}
      strokeLinejoin={LINE}
    />
    <path
      d="M8.64999 1C11.7669 1 18 1.765 18 8.65C18 15.535 11.7669 16.3 8.64999 16.3"
      stroke={props.color ?? COLOR}
      strokeWidth={STROKE_WIDTH}
    />
  </svg>
);
