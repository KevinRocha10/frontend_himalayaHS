import { DateRangePicker } from "@tremor/react";

import React from "react";

const DatePicker = () => {
  return (
    <DateRangePicker
      value={undefined}
      defaultValue={undefined}
      onValueChange={undefined}
      options={undefined}
      enableDropdown={true}
      placeholder="Select..."
      enableYearPagination={false}
      minDate={null}
      maxDate={null}
      color="blue"
      maxWidth="max-w-none"
      marginTop="mt-0"
    />
  );
};

export default DatePicker;
