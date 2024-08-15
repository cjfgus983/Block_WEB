import React from "react";
import styled from "styled-components";

const Calendars = styled.img`
  width: 28px;
  height: 32px;
  margin: 12px;
`;
const Calendar = () => {
  return <Calendars src="/img/calendar.svg" />;
};

export default Calendar;
