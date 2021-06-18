import React, { createContext, FC, useCallback } from 'react';

import { IMoonProvider } from './interfaces';

// moon context
const MoonContext = createContext({});

// moon provider
const MoonProvider: FC<IMoonProvider> = ({
  children
}) => {
  // get name
  const getNamePhase = useCallback((phase: number): string => {
    switch (phase) {
      case 0: return "New Moon";
      case 1: return "Waxing Crescent Moon";
      case 2: return "Quarter Moon";
      case 3: return "Waxing Gibbous Moon";
      case 4: return "Full Moon";
      case 5: return "Waning Gibbous Moon";
      case 6: return "Last Quarter Moon";
      case 7: return "Waning Crescent Moon";
    }

    return "New Moon";
  }, []);
  
  // get moon fraction
  const getMoonFraction = useCallback((year: number, month: number, day: number): number => {
    const date = new Date(year, month, day);
    const days_after_new_moon = (date.getTime() / 86400000) - 18256.8;
    const synodic_month = 29.53059;
    const m = Math.abs(days_after_new_moon / synodic_month);

    return (m - Math.floor(m)); // fractional from 0 to 1 (ex).
  }, []);

  // moon phase name
  const getMoonPhaseName = useCallback((yearIn: number, monthIn: number, dayIn: number): string => {
    let year = yearIn;
    let month = monthIn;
    let day = dayIn;

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;

    let jd: any;
    let phase: any;

    jd = 365.25 * year + 30.6 * month + day - 694039.09; // jd is total days elapsed
    jd /= 29.53; // divide by the moon cycle (29.53 days)
    phase = parseInt(jd, 10); // int(jd) -> phase, take integer part of jd
    jd -= phase; // subtract integer part to leave fractional part of original jd
    phase = Math.ceil(jd * 8); // scale fraction from 0-8 and round by adding 0.5
    phase = phase & 7; // 0 and 8 are the same so turn 8 into 0

    return getNamePhase(phase);
  }, [ getNamePhase ]);

  // render
  return (
    <MoonContext.Provider
      value={{
        getMoonFraction,
        getMoonPhaseName
      }}>
      {children}
    </MoonContext.Provider>
  );
};

export { MoonContext, MoonProvider };
export default MoonProvider;