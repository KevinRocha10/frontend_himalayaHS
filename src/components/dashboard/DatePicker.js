import { Datepicker } from "@tremor/react";
import React from "react";

const DatePicker = () => {
  return (
    <Datepicker
      placeholder="Seleccione:"
      enableRelativeDates={true}
      handleSelect={undefined}
      defaultStartDate={null}
      defaultEndDate={null}
      defaultRelativeFilterOption={null}
      minDate={null}
      maxDate={null}
      color="blue"
      maxWidth="max-w-none"
      marginTop="mt-0"
    />
  );
};

export default DatePicker;
