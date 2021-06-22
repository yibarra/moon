import React, { FC } from 'react';
import { Text as TextKonva } from 'react-konva';

// text
const Text: FC<any> = (props) => {
  // render
  return (
    <TextKonva
      {...props}
      listening={false}
      align="center"
      fontFamily="Roboto Condensed" />
  );
};

export default Text;