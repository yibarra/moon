import React, { FC } from 'react';
import { Text } from 'react-konva';

import { IParagraph } from './interfaces';

// paragraph
const Paragraph: FC<IParagraph> = (props) => {
  // render
  return (
    <Text
      {...props}
      fontFamily="Roboto Slab"
      fontSize={10}
      fontStyle="bold" />
  );
};

export default Paragraph;