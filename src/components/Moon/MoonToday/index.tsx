import React, { FC } from 'react';
import { Group } from 'react-konva';

import ControlPosition from '../../ControlPosition';
import MoonPhase from '../MoonPhase';
import MoonTodayControls from './MoonTodayControls';
import MoonTodayInfo from './MoonTodayInfo';

import { IMoonToday } from './interfaces';

// moon today
const MoonToday: FC<IMoonToday> = ({
  animate,
  lang,
  radius,
  setToday,
  theme,
  today,
  x,
  y
}) => {
  // render
  return (
    <Group
      listening={!animate}
      rotation={90}
      offsetX={x}
      offsetY={y}
      x={x}
      y={y}>
      <MoonTodayInfo
        lang={lang}
        theme={theme}
        today={today}
        x={x}
        y={y} />

      <MoonPhase
        active={false}
        day={today.getDate()}
        delay={300}
        month={today.getMonth()}
        size={32}
        strokeWidth={1}
        theme={theme}
        x={x}
        y={y}
        year={today.getFullYear()} />

      <ControlPosition
        radius={radius}
        theme={theme}
        x={x}
        y={y} />

      <MoonTodayControls
        lang={lang}
        setYear={setToday}
        theme={theme}
        x={x}
        y={y}
        year={today.getFullYear()} />
    </Group>
  );
};

export default MoonToday;