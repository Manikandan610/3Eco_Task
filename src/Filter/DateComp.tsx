import React from "react";
import { DatePicker } from "antd";

const DateComp = () => {
  const { RangePicker } = DatePicker;

  const onChange = ({ date, dateString }: any) => {
    console.log(date, dateString);
  };

  return (
    <div className="date-row">
      <RangePicker onChange={onChange} />
    </div>
  );
};

export default DateComp;
