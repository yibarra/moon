import React, { FC, useCallback } from 'react';
import { Layer, Text } from 'react-konva';

import { IFooter } from './interfaces';

// footer
const Footer: FC<IFooter> = () => {
  // redirect
  const redirect = useCallback(() => {
    window.open('mailto:yeissonibarra@gmail.com', '_blank');
  }, []);

  // render
  return (
    <Layer
      x={20}
      y={window.innerHeight - 20}>
      <Text
        fill="white"
        fontFamily="Roboto"
        fontSize={10}
        onClick={redirect}
        text="@Julian Ibarra" />
    </Layer>
  );
};

export default Footer;