interface INepaliDate {
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

declare class NepaliDate implements INepaliDate {
    #private;
    constructor(arg?: string | number | Date | NepaliDate);
    static MAX_YEAR: number;
    static MIN_YEAR: number;
    setEnglishDate(date: Date): void;
    getEnglishDate(): Date;
    getDate(): number;
    getDay(): number;
    getFullYear(): number;
    getHours(): number;
    getMilliseconds(): number;
    getMinutes(): number;
    getMonth(): number;
    getSeconds(): number;
    getTime(): number;
    getTimezoneOffset(): number;
    valueOf(): number;
    setDate(date: number): number;
    setFullYear(year: number, month?: number, date?: number): number;
    toString(): string;
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setMilliseconds(ms: number): number;
    setMinutes(min: number, sec?: number, ms?: number): number;
    setMonth(month: number, date?: number): number;
    setSeconds(sec: number, ms?: number): number;
    setTime(time: number): number;
    toDateString(delimiter?: string): string;
    toTimeString(): string;
    format(pattern: string): string;
    get [Symbol.toStringTag](): string;
}

export { NepaliDate };
