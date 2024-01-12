import React from "react";

export default function FormattedTime(props) {
  let hour = props.time.getHours();
  let minute = props.time.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  return (
    <span>
      {hour}:{minute}
    </span>
  );
}
