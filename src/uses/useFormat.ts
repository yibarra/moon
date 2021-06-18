import { getDaysInMonth, format, parse } from "date-fns";
import { useCallback } from "react";

// Hook
function UseFormat() {
  // convert to roman
  const convertToRoman = useCallback((num: number): string => {
    const romanLookUp: any = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';

    // Sort the object values to get them to descending order
    Object.keys(romanLookUp).sort((a, b) => romanLookUp[b] - romanLookUp[a]).forEach((key) => {
      while (num >= romanLookUp[key]) {
        result += key;
        num -= romanLookUp[key];
      }
    });

    return result;
  }, []);

  // get current active month
  const getActiveMonth = useCallback((today: Date, current: Date): Object => {
    const todayMonth: number = today.getMonth();
    const todayYear: number = today.getFullYear();

    const monthMonth: number = current.getMonth();
    const monthYear: number = current.getFullYear();

    return {
      active: ((monthMonth <= todayMonth && todayYear === monthYear) ) || monthYear < todayYear,
      day: getDaysInMonth(current),
      currentMonth: todayMonth === monthMonth && todayYear === monthYear
    };
  }, []);

  // fix date
  const fixDate = useCallback((year: number, month: number) => {
    const form: string = 'yyyy-M-dd';
    const fix: any = parse(format(new Date(`${year}-${month}-01`), form), form, new Date());
    const current = parse(format(new Date(`${year}-${month}-${getDaysInMonth(fix)}`), form), form, new Date());

    return current;
  }, []);

  return {
    convertToRoman,
    fixDate,
    getActiveMonth,
  }
}

export default UseFormat;