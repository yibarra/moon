import React, { FC } from 'react';
import { Text as TextKonva } from 'react-konva';

// text
const Text: FC<any> = (props) => {
  // render
  return (
    <TextKonva
      align="center"
      fontFamily="Roboto Condensed"
      listening={false}
      {...props} />
  );
};

export default Text;