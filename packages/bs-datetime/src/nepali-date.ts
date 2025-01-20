import { MAPPINGS, MAX_YEAR, MIN_YEAR, PAD_MAP } from "./consts";
import { NepaliDateGenericError, NepaliDateOutOfRangeError } from "./error";
import { type INepaliDate } from "./interface";
import { findCSumIndex } from "./utils";

const date = new Date(MAPPINGS.get(2000)?.startTime!);
class NepaliDate implements INepaliDate {
  #englishDate: Date = date;
  #nepaliDate: [number, number, number] = [2000, 1, 1];

  constructor(arg?: string | number | Date | NepaliDate) {
    if (arg instanceof Date) {
      this.setEnglishDate(arg);
    } else if (arg === undefined || arg === null) {
      this.setEnglishDate(new Date());
    } else if (typeof arg === "number") {
      this.setEnglishDate(new Date(arg));
    } else if (arg instanceof NepaliDate) {
      this.#nepaliDate = [...arg.#nepaliDate];
      this.#syncADwithBS();
    } else if (typeof arg === "string") {
      // todo
    } else {
      throw new Error("Invalid Argument.");
    }
  }

  static MAX_YEAR = MAX_YEAR;
  static MIN_YEAR = MIN_YEAR;

  static now() {
    return Date.now();
  }

  static UTC(
    ...props: [
      year: number,
      monthIndex: number,
      date?: number,
      hours?: number,
      minutes?: number,
      seconds?: number,
      ms?: number,
    ]
  ) {
    return Date.UTC(...props);
  }

  static #convertToBS = (date: Date) => {
    /**
     * Start with the assumption that the correct year is given date's year + 57
     * Example:
     *
     * Given Year: 2024, Assumed Year: 2081
     *
     * This would be incorrect upto 2024 April X, which we will check in next step
     */
    const time = date.getTime();
    let year = date.getFullYear() + 57;

    if (year > MAX_YEAR + 1 || year < MIN_YEAR) {
      throw new NepaliDateOutOfRangeError(
        `The given date does not fall in the supported range (2000 BS - 2099 BS).`,
        { cause: `Given Date: ${year - 57} AD, Converted to: ${year}` }
      );
    }

    /**
     * if the current date is (or is after) startTime, we have assumed the correct year.
     * Example 1:
     *
     * Given date:          1 January, 2025
     * Assumed Year:        2082
     * startTime for 2082:  14 April, 2025
     *
     * since startTime > given date, year assumed is incorrect and corrected to year = year - 1
     *
     * Example 2
     *
     * Given date:          14 April, 2025
     * Assumed Year:        2082
     * startTime for 2082:  14 April, 2025
     *
     * since startTime <= given date, year assumed is correct and is not changed
     */
    let yearMapping;
    while ((yearMapping = MAPPINGS.get(year))!.startTime > time) {
      year--;
    }

    if (!yearMapping) {
      throw new NepaliDateGenericError(
        `The given date could not be converted. Does it fall between the range of supported years (2000 BS - 2099 BS)?`,
        { cause: `Given Date: ${year - 57} AD, Converted to: ${year}` }
      );
    }

    /**
     * get the no of days passed from startTime of selected year.
     *
     * time - yearMapping.startTime = no of milliseconds passed since the start of
     *                                the year
     *
     * we get the no of days by dividing by required constant which is a day in milliseconds
     */
    const noOfDays = Math.floor((time - yearMapping.startTime) / 86_400_000);

    /**
     * Find the month from the given no of days passed since the start of the year.
     *
     * Example:
     *
     * Month CSum Array = [31, 63, 94, 126, 157, 187, 217, 247, 276, 306, 335, 366]
     * No of Days Passed = 68
     *
     * 68 lies just before the 3rd value, so it's index (2) is returned.
     */
    const month = findCSumIndex(yearMapping.cMonths, noOfDays);

    /**
     * find the days passed since the month started.
     *
     * No of Days passed - Days passed since last CF element.
     *
     * Example (taking last comment into account):
     *
     * 68 - CSum[2 - 1] = 68 - 63 = 5
     *
     * means its the 5th day of the month.
     */
    const day = noOfDays - (yearMapping.cMonths[month - 1] ?? 0);

    return [year, month, day] as [number, number, number];
  };

  static #convertToAD = (
    date: [number, number, number] = [0, 0, 0],
    currentDate: Date
  ) => {
    const [bsYear, bsMonth, bsDay] = date;

    const bsYearMapping = MAPPINGS.get(bsYear)!;

    if (bsYear > MAX_YEAR || bsYear < MIN_YEAR) {
      throw new NepaliDateOutOfRangeError(
        `The given date does not fall in the supported range (2000 BS - 2099 BS).`
      );
    }

    const monthCSum = bsYearMapping.cMonths;

    const noOfDays = (monthCSum[bsMonth - 1] ?? 0) + bsDay;

    const ad = new Date(bsYearMapping.startTime + noOfDays * 86_400_000);

    const hours = currentDate.getUTCHours();
    const mins = currentDate.getUTCMinutes();
    const secs = currentDate.getUTCSeconds();
    const ms = currentDate.getUTCMilliseconds();
    ad.setUTCHours(hours, mins, secs, ms);

    return ad;
  };

  #syncADwithBS() {
    this.#englishDate = NepaliDate.#convertToAD(
      this.#nepaliDate,
      this.getEnglishDate()
    );
  }

  #syncBSwithAD() {
    this.#nepaliDate = NepaliDate.#convertToBS(this.#englishDate);
  }

  setEnglishDate(date: Date) {
    this.#englishDate = date;
    this.#nepaliDate = NepaliDate.#convertToBS(date);
  }

  getEnglishDate(): Date {
    return this.#englishDate;
  }

  getDate(): number {
    return this.#nepaliDate[2] + 1;
  }

  getDay(): number {
    return this.#englishDate.getDay();
  }

  getFullYear(): number {
    return this.#nepaliDate[0];
  }

  getHours(): number {
    // time remains unchanged during conversion
    return this.#englishDate.getHours();
  }

  getMilliseconds(): number {
    return this.#englishDate.getMilliseconds();
  }

  getMinutes(): number {
    return this.#englishDate.getMinutes();
  }

  getMonth(): number {
    return this.#nepaliDate[1];
  }

  getSeconds(): number {
    return this.#englishDate.getSeconds();
  }

  getTime(): number {
    return this.#englishDate.getTime();
  }

  getTimezoneOffset(): number {
    return this.#englishDate.getTimezoneOffset();
  }

  valueOf(): number {
    return this.#englishDate.valueOf();
  }

  setDate(date: number): number {
    this.#nepaliDate[2] = date - 1;
    this.#syncADwithBS();

    return this.#englishDate.getTime();
  }

  setFullYear(year: number, month?: number, date?: number): number {
    this.#nepaliDate = [
      year,
      month ?? this.#nepaliDate[1],
      date ?? this.#nepaliDate[2],
    ];

    this.#syncADwithBS();

    return this.#englishDate.getTime();
  }

  toString(): string {
    const date = this.#nepaliDate;

    return `${date[0]}/${PAD_MAP[date[1] + 1]}/${PAD_MAP[date[2] + 1]}`;
  }

  setHours(hours: number, min?: number, sec?: number, ms?: number): number {
    this.#englishDate.setHours(hours, min, sec, ms);

    this.#syncBSwithAD();

    return this.#englishDate.getTime();
  }

  setMilliseconds(ms: number): number {
    this.#englishDate.setMilliseconds(ms);

    this.#syncBSwithAD();

    return this.#englishDate.getTime();
  }

  setMinutes(min: number, sec?: number, ms?: number): number {
    this.#englishDate.setMinutes(min, sec, ms);

    this.#syncBSwithAD();

    return this.#englishDate.getTime();
  }

  setMonth(month: number, date?: number): number {
    const newMonth = (this.getFullYear() - 2000) * 12 + (Number(month) || 0);

    this.#nepaliDate = [
      2000 + Math.floor(newMonth / 12),
      newMonth % 12,
      date ?? this.#nepaliDate[2],
    ];

    this.#syncADwithBS();

    return this.#englishDate.getTime();
  }

  get get() {
    return {
      endOfMonth: () => {
        const [year, month, day] = this.#nepaliDate;

        const date = new NepaliDate(this);
        date.setDate(MAPPINGS.get(year)!.months[month] + 1);

        return date;
      },
      startOfMonth: () => {
        const [year, month, day] = this.#nepaliDate;

        const date = new NepaliDate(this);
        date.setDate(0);

        return date;
      },
    };
  }

  setSeconds(sec: number, ms?: number): number {
    this.#englishDate.setSeconds(sec, ms);

    this.#syncBSwithAD();

    return this.#englishDate.getTime();
  }

  setTime(time: number): number {
    this.#englishDate.setTime(time);

    this.#syncBSwithAD();

    return this.#englishDate.getTime();
  }

  toDateString(delimiter = "/"): string {
    const [year, month, day] = this.#nepaliDate;

    return `${year}${delimiter}${PAD_MAP[month + 1]}${delimiter}${
      PAD_MAP[day + 1]
    }`;
  }

  toTimeString(): string {
    return `${this.#englishDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${this.#englishDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${this.#englishDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}.${this.#englishDate
      .getMilliseconds()
      .toString()
      .padStart(3, "0")}`;
  }

  format(pattern: string): string {
    return pattern.replaceAll(/|/, (match) => {
      return "";
    });
  }

  get [Symbol.toStringTag]() {
    return this.toString();
  }
}

export { NepaliDate };
