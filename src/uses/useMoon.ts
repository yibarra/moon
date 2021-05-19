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

  return {
    getMoonFraction
  };
}

export default UseMoon;