"use client";

import React from "react";
import { CalendarProvider } from "./calendar-context";
import CalendarGrid from "./calendar-grid";
import { CalendarHeader } from "./calendar-header";
import type { NepaliDate } from "bs-datetime";

export type CalendarProps = {
  locale?: "en" | "np";
  showYearNavigation?: boolean;
  weekends?: number[];
  showAdjacentMonthDates?: boolean;
  value?: NepaliDate;
  onValueChange?: (date: NepaliDate | undefined) => void;
  defaultViewerDate?: NepaliDate;
};

export function Calendar({
  locale = "en",
  showYearNavigation = false,
  weekends = [6],
  showAdjacentMonthDates = false,
  onValueChange,
  value,
  defaultViewerDate,
}: CalendarProps) {
  return (
    <CalendarProvider
      value={value}
      onValueChange={onValueChange}
      defaultViewerDate={defaultViewerDate}
    >
      <div tabIndex={-1}>
        <CalendarHeader
          locale={locale}
          showYearNavigation={showYearNavigation}
        />
        <CalendarGrid
          locale={locale}
          weekends={weekends}
          showAdjacentMonthDates={showAdjacentMonthDates}
        />
      </div>
    </CalendarProvider>
  );
}
