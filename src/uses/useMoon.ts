// Hook
function UseMoon() {
  // get moon fraction
  const getMoonFraction = (year: number, month: number, day: number): number => {
    const date = new Date(year, month, day);
    const days_after_new_moon = (date.getTime() / 86400000) - 18256.8;
    const synodic_month = 29.53059;
    const m = Math.abs(days_after_new_moon / synodic_month);

    return (m - Math.floor(m)); // fractional from 0 to 1 (ex).
  };

  // moon phase name
  const moonPhaseName = (yearIn: number, monthIn: number, dayIn: number) => {
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

    switch (phase) {
      case 0: phase = "New Moon"; break;
      case 1: phase = "Waxing Crescent Moon"; break;
      case 2: phase = "Quarter Moon"; break;
      case 3: phase = "Waxing Gibbous Moon"; break;
      case 4: phase = "Full Moon"; break;
      case 5: phase = "Waning Gibbous Moon"; break;
      case 6: phase = "Last Quarter Moon"; break;
      case 7: phase = "Waning Crescent Moon"; break;
    }
    
    return phase;
  };

  return {
    getMoonFraction,
    moonPhaseName
  };
}

export default UseMoon;