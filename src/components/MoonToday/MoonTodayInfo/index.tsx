import React, { FC, useContext } from 'react';
import { Text } from 'react-konva';
import { MainContext } from '../../../providers/MainProvider';

import { IMoonTodayInfo } from './interfaces';

// moon today info
const MoonTodayInfo: FC<IMoonTodayInfo> = () => {
  const { date } = useContext(MainContext);

  console.log(date);

  // render
  return (
    <>
     <Text
      fill="white"
      x={(window.innerWidth / 2) - (90 / 2)}
      y={(window.innerHeight / 2) - 100}
      text="TODAY"
      fontSize={12}
      fontFamily="Roboto Condensed"
      align="center"
      width={90} /> 

    <Text
      fill="white"
      x={(window.innerWidth / 2) - (90 / 2)}
      y={(window.innerHeight / 2) - 80}
      text="Wednesday"
      fontSize={10}
      fontFamily="Roboto Condensed"
      align="center"
      width={90} /> 
    </>
  );
};

export default MoonTodayInfo;