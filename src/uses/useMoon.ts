// Hook
function UseMoon() {
  // get name
  const getNamePhase = (phase: number): string => {
    switch (phase) {
      case 0: return "moon.new_moon";
      case 1: return "moon.waxing_crescent";
      case 2: return "moon.quarter";
      case 3: return "moon.waxing_gibbous";
      case 4: return "moon.full";
      case 5: return "moon.waning_gibbous";
      case 6: return "moon.last_quarter";
      case 7: return "moon.waning_crescent";
    }

    return "moon.new_moon";
  };
  
  // get moon fraction
  const getMoonFraction = (year: number, month: number, day: number): number => {
    const date = new Date(year, month, day);
    const days_after_new_moon = (date.getTime() / 86400000) - 18256.8;
    const synodic_month = 29.53059;
    const m = Math.abs(days_after_new_moon / synodic_month);

    return (m - Math.floor(m)); // fractional from 0 to 1 (ex).
  };

  // moon phase name
  const getMoonPhaseName = (yearIn: number, monthIn: number, dayIn: number): string => {
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
  };

  //normalize values to range 0...1
  const normalize = (v: any) => {
    v = v - Math.floor(v);

    if (v < 0)
      v = v + 1;

    return v;
  };

  // get moon info
  const getMoonInfo = (date: Date) => {
    var age, // Moon's age
      distance, // Moon's distance in earth radii
      latitude, // Moon's ecliptic latitude
      longitude, // Moon's ecliptic longitude
      phase, // Moon's phase
      trajectory, // Moon's trajectory
      zodiac; // Moon's zodiac sign 

    var yy, mm, k1, k2, k3, jd;
    var ip, dp, np, rp;

    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();


    yy = year - Math.floor((12 - month) / 10);
    mm = month + 9;
    if (mm >= 12) {
      mm = mm - 12;
    }

    k1 = Math.floor(365.25 * (yy + 4712));
    k2 = Math.floor(30.6 * mm + 0.5);
    k3 = Math.floor(Math.floor((yy / 100) + 49) * 0.75) - 38;

    jd = k1 + k2 + day + 59;  // for dates in Julian calendar
    if (jd > 2299160) {
      jd = jd - k3;      // for Gregorian calendar
    }

    //calculate moon's age in days
    ip = normalize((jd - 2451550.1) / 29.530588853);
    age = ip * 29.53;

    if (age <  1.84566) {
      phase = 'NEW';
      trajectory = 'ascendent';
    } else if (age <  5.53699) {
      phase = 'Waxing crescent';
      trajectory = 'ascendent';
    } else if (age <  9.22831) {
      phase = 'First quarter';
      trajectory = 'ascendent';
    } else if (age < 12.91963) {
      phase = 'Waxing gibbous';
      trajectory = 'ascendent';
    } else if (age < 16.61096) {
      phase = 'FULL';
      trajectory = 'descendent';
    } else if (age < 20.30228) {
      phase = 'Waning gibbous';
      trajectory = 'descendent';
    } else if (age < 23.99361) {
      phase = 'Last quarter';
      trajectory = 'descendent';
    } else if (age < 27.68493) {
      phase = 'Waning crescent';
      trajectory = 'descendent';
    } else {
      phase = 'NEW';
      trajectory = 'ascendent';
    }

    ip = ip * 2 * Math.PI;  //Convert phase to radians

    // Calculate moon's distance
    dp = 2 * Math.PI * normalize((jd - 2451562.2) / 27.55454988);
    distance = 60.4 - 3.3 * Math.cos(dp) - 0.6 * Math.cos(2 * ip - dp) - 0.5 * Math.cos(2 * ip);

    // Calculate moon's ecliptic latitude
    np = 2 * Math.PI * normalize((jd - 2451565.2) / 27.212220817);
    latitude = 5.1 * Math.sin(np);

    // Calculate moon's ecliptic longitude
    rp = normalize((jd - 2451555.8) / 27.321582241);
    longitude = 360 * rp + 6.3 * Math.sin(dp) + 1.3 * Math.sin(2 * ip - dp) + 0.7 * Math.sin(2 * ip);

    if (longitude <  33.18) {
      zodiac = 'Pisces';
    } else if (longitude <  51.16) {
      zodiac = 'Aries';
    } else if (longitude <  93.44) {
      zodiac = 'Taurus';
    } else if (longitude < 119.48) {
      zodiac = 'Gemini';
    } else if (longitude < 135.30) {
      zodiac = 'Cancer';
    } else if (longitude < 173.34) {
      zodiac = 'Leo';
    } else if (longitude < 224.17) {
      zodiac = 'Virgo';
    } else if (longitude < 242.57) {
      zodiac = 'Libra';
    } else if (longitude < 271.26) {
      zodiac = 'Scorpio';
    } else if (longitude < 302.49) {
      zodiac = 'Sagittarius';
    } else if (longitude < 311.72) {
      zodiac = 'Capricorn';
    } else if (longitude < 348.58) {
      zodiac = 'Aquarius';
    } else {
      zodiac = 'Pisces';
    }

    return {
      'date' : { 'year' : year, 'month' : month , 'day' : day},
      'age' : age,
      'distance' : distance * 6371,
      'ecliptic' : {
        'latitude' : latitude,
        'longitude' : longitude
      },
      'phase' : phase,
      'trajectory' : trajectory,
      'constellation' : zodiac,
    };
  };

  return {
    getMoonFraction,
    getMoonPhaseName,
    getMoonInfo
  };
}

export default UseMoon;