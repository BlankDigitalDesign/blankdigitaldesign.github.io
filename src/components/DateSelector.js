import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const DateSelector = () => {
  return <DatePicker name="date" defaultValue={dayjs().add(2, "day")} />;
};

export default DateSelector;
