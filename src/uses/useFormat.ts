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

  return {
    convertToRoman
  }
}

export default UseFormat;