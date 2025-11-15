import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ClockSvg(props: any) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 122.88"
      xmlSpace="preserve"
      enableBackground="new 0 0 122.88 122.88"
      {...props}
    >
      <Path
        d="M61.44 0c33.93 0 61.44 27.51 61.44 61.44 0 33.93-27.51 61.44-61.44 61.44C27.51 122.88 0 95.37 0 61.44 0 27.51 27.51 0 61.44 0zm-7.22 37.65c0-9.43 14.37-9.44 14.37.02v25.75l16.23 8.59c.08.04.16.09.23.15l.14.1c7.54 4.94.53 16.81-7.53 12.15l-.03-.02-19.64-10.52c-2.3-1.23-3.79-3.67-3.79-6.29h.01l.01-29.93z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FF347B"
      />
    </Svg>
  );
}

export default ClockSvg;
