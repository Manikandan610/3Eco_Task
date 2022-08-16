import React from "react";
import { DatePicker } from "antd";

const DateComp = () => {
  return (
    <div className="date-row">
      <div className="date-first-col">
        <p>From</p>
        <DatePicker bordered={true} placeholder="Date" style={{ width: 110 }} />
      </div>
      <div className="date-second-col">
        <p>To</p>
        <DatePicker
          picker="date"
          bordered={true}
          placeholder="Date"
          style={{ width: 110 }}
        />
      </div>
    </div>
  );
};

export default DateComp;
