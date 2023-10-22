import React from "react";
import { DatePicker, Space } from "antd";

interface IDateInputProps {
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
}

export default function DateInput(props: IDateInputProps) {
  return (
    <Space size={12} direction="vertical">
      <DatePicker.RangePicker onChange={props.onChange} onBlur={props.onBlur} />
    </Space>
  );
}
