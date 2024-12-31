export interface INepaliDate {
  /** Returns the English date object */
  getEnglishDate(): Date;
  /** Returns a string representation of a date. The format of the string depends on the locale. */
  toString(): string;
  /** Returns a date as a string value. */
  toDateString(): string;
  /** Returns a time as a string value. */
  toTimeString(): string;
  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  valueOf(): number;
  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  getTime(): number;
  /** Gets the year, using local time. */
  getFullYear(): number;
  /** Gets the month, using local time. */
  getMonth(): number;
  /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
  getDate(): number;
  /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
  getDay(): number;
  /** Gets the day of the week using Universal Coordinated Time (UTC). */
  getHours(): number;
  /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
  getMinutes(): number;
  /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
  getSeconds(): number;
  /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
  getMilliseconds(): number;
  /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
  getTimezoneOffset(): number;
  /**
   * Sets the date and time value in the Date object.
   * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
   */
  setTime(time: number): number;
  /**
   * Sets the milliseconds value in the Date object using local time.
   * @param ms A numeric value equal to the millisecond value.
   */
  setMilliseconds(ms: number): number;

  /**
   * Sets the seconds value in the Date object using local time.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setSeconds(sec: number, ms?: number): number;
  /**
   * Sets the minutes value in the Date object using local time.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setMinutes(min: number, sec?: number, ms?: number): number;
  /**
   * Sets the hour value in the Date object using local time.
   * @param hours A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setHours(hours: number, min?: number, sec?: number, ms?: number): number;
  /**
   * Sets the numeric day-of-the-month value of the Date object using local time.
   * @param date A numeric value equal to the day of the month.
   */
  setDate(date: number): number;
  /**
   * Sets the month value in the Date object using local time.
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
   */
  setMonth(month: number, date?: number): number;
  /**
   * Sets the year of the Date object using local time.
   * @param year A numeric value for the year.
   * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
   * @param date A numeric value equal for the day of the month.
   */
  setFullYear(year: number, month?: number, date?: number): number;
}

// export interface INepaliDate {
//   /**
//    * Format number using the custom numbering system.
//    *
//    * @since 9.5.0
//    * @param value The number to format.
//    * @returns The formatted number.
//    */
//   formatNumber(value: number): string;
//   /**
//    * Reference to the built-in Date constructor.
//    *
//    * @deprecated Use `newDate()` or `today()`.
//    */
//   Date: typeof Date;
//   /**
//    * Creates a new date object to the today's date.
//    *
//    * @since 9.5.0
//    * @returns The new date object.
//    */
//   today: () => Date;
//   /**
//    * Creates a new date object with the specified year, month and date.
//    *
//    * @since 9.5.0
//    * @param year The year.
//    * @param monthIndex The month (0-11).
//    * @param date The day of the month.
//    * @returns The new date object.
//    */
//   newDate: (year: number, monthIndex: number, date: number) => Date;
//   /**
//    * Adds the specified number of days to the given date.
//    *
//    * @param date The date to add days to.
//    * @param amount The number of days to add.
//    * @returns The new date with the days added.
//    */
//   addDays: typeof addDays;
//   /**
//    * Adds the specified number of months to the given date.
//    *
//    * @param date The date to add months to.
//    * @param amount The number of months to add.
//    * @returns The new date with the months added.
//    */
//   addMonths: typeof addMonths;
//   /**
//    * Adds the specified number of weeks to the given date.
//    *
//    * @param date The date to add weeks to.
//    * @param amount The number of weeks to add.
//    * @returns The new date with the weeks added.
//    */
//   addWeeks: typeof addWeeks;
//   /**
//    * Adds the specified number of years to the given date.
//    *
//    * @param date The date to add years to.
//    * @param amount The number of years to add.
//    * @returns The new date with the years added.
//    */
//   addYears: typeof addYears;
//   /**
//    * Returns the number of calendar days between the given dates.
//    *
//    * @param dateLeft The later date.
//    * @param dateRight The earlier date.
//    * @returns The number of calendar days between the dates.
//    */
//   differenceInCalendarDays: typeof differenceInCalendarDays;
//   /**
//    * Returns the number of calendar months between the given dates.
//    *
//    * @param dateLeft The later date.
//    * @param dateRight The earlier date.
//    * @returns The number of calendar months between the dates.
//    */
//   differenceInCalendarMonths: typeof differenceInCalendarMonths;
//   /**
//    * Returns the months between the given dates.
//    *
//    * @param interval The interval to get the months for.
//    */
//   eachMonthOfInterval: typeof eachMonthOfInterval;
//   /**
//    * Returns the end of the ISO week for the given date.
//    *
//    * @param date The original date.
//    * @returns The end of the ISO week.
//    */
//   endOfISOWeek: typeof endOfISOWeek;
//   /**
//    * Returns the end of the month for the given date.
//    *
//    * @param date The original date.
//    * @returns The end of the month.
//    */
//   endOfMonth: typeof endOfMonth;
//   /**
//    * Returns the end of the week for the given date.
//    *
//    * @param date The original date.
//    * @returns The end of the week.
//    */
//   endOfWeek: typeof endOfWeek;
//   /**
//    * Returns the end of the year for the given date.
//    *
//    * @param date The original date.
//    * @returns The end of the year.
//    */
//   endOfYear: typeof endOfYear;
//   /**
//    * Formats the given date using the specified format string.
//    *
//    * @param date The date to format.
//    * @param formatStr The format string.
//    * @returns The formatted date string.
//    */
//   format: typeof format;
//   /**
//    * Returns the ISO week number for the given date.
//    *
//    * @param date The date to get the ISO week number for.
//    * @returns The ISO week number.
//    */
//   getISOWeek: typeof getISOWeek;
//   /**
//    * Returns the month of the given date.
//    *
//    * @param date The date to get the month for.
//    * @returns The month.
//    */
//   getMonth: typeof getMonth;
//   /**
//    * Returns the year of the given date.
//    *
//    * @param date The date to get the year for.
//    * @returns The year.
//    */
//   getYear: typeof getYear;
//   /**
//    * Returns the local week number for the given date.
//    *
//    * @param date The date to get the week number for.
//    * @returns The week number.
//    */
//   getWeek: typeof getWeek;
//   /**
//    * Checks if the first date is after the second date.
//    *
//    * @param date The date to compare.
//    * @param dateToCompare The date to compare with.
//    * @returns True if the first date is after the second date.
//    */
//   isAfter: typeof isAfter;
//   /**
//    * Checks if the first date is before the second date.
//    *
//    * @param date The date to compare.
//    * @param dateToCompare The date to compare with.
//    * @returns True if the first date is before the second date.
//    */
//   isBefore: typeof isBefore;
//   /**
//    * Checks if the given value is a Date object.
//    *
//    * @param value The value to check.
//    * @returns True if the value is a Date object.
//    */
//   isDate: (value: unknown) => value is Date;
//   /**
//    * Checks if the given dates are on the same day.
//    *
//    * @param dateLeft The first date to compare.
//    * @param dateRight The second date to compare.
//    * @returns True if the dates are on the same day.
//    */
//   isSameDay: typeof isSameDay;
//   /**
//    * Checks if the given dates are in the same month.
//    *
//    * @param dateLeft The first date to compare.
//    * @param dateRight The second date to compare.
//    * @returns True if the dates are in the same month.
//    */
//   isSameMonth: typeof isSameMonth;
//   /**
//    * Checks if the given dates are in the same year.
//    *
//    * @param dateLeft The first date to compare.
//    * @param dateRight The second date to compare.
//    * @returns True if the dates are in the same year.
//    */
//   isSameYear: typeof isSameYear;
//   /**
//    * Returns the latest date in the given array of dates.
//    *
//    * @param dates The array of dates to compare.
//    * @returns The latest date.
//    */
//   max: typeof max;
//   /**
//    * Returns the earliest date in the given array of dates.
//    *
//    * @param dates The array of dates to compare.
//    * @returns The earliest date.
//    */
//   min: typeof min;
//   /**
//    * Sets the month of the given date.
//    *
//    * @param date The date to set the month on.
//    * @param month The month to set (0-11).
//    * @returns The new date with the month set.
//    */
//   setMonth: typeof setMonth;
//   /**
//    * Sets the year of the given date.
//    *
//    * @param date The date to set the year on.
//    * @param year The year to set.
//    * @returns The new date with the year set.
//    */
//   setYear: typeof setYear;
//   /**
//    * Returns the start of the broadcast week for the given date.
//    *
//    * @param date The original date.
//    * @returns The start of the broadcast week.
//    */
//   startOfBroadcastWeek: typeof startOfBroadcastWeek;
//   /**
//    * Returns the start of the day for the given date.
//    *
//    * @param date The original date.
//    * @returns The start of the day.
//    */
//   startOfDay: typeof startOfDay;
//   /**
//    * Returns the start of the ISO week for the given date.
//    *
//    * @param date The original date.
//    * @returns The start of the ISO week.
//    */
//   startOfISOWeek: typeof startOfISOWeek;
//   /**
//    * Returns the start of the month for the given date.
//    *
//    * @param date The original date.
//    * @returns The start of the month.
//    */
//   startOfMonth: typeof startOfMonth;
//   /**
//    * Returns the start of the week for the given date.
//    *
//    * @param date The original date.
//    * @returns The start of the week.
//    */
//   startOfWeek: typeof startOfWeek;
//   /**
//    * Returns the start of the year for the given date.
//    *
//    * @param date The original date.
//    * @returns The start of the year.
//    */
//   startOfYear: typeof startOfYear;
// }
