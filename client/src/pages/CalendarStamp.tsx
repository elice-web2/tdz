import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import '../assets/CalendarStamp.css';
import dayjs from "dayjs";
import Container from '../components/styles/Container';
import Logo from '../components/common/Logo';
import Navbar from '../components/common/Navbar';

//성공한 날짜 더미데이터 
const marks = [
  "23-06-2022",
  "24-06-2022",
  "01-07-2022",
  "03-07-2022",
  "04-07-2022",
  "05-07-2022",
  "06-07-2022",
  "08-07-2022",
];
const CalendarStamp = ()=> {
  const [value, onChange] = useState(new Date());
  return (
  <Container>
    <Logo />
    <CalendarContainer>
      <Calendar 
        onChange={onChange} 
        value={value} 
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month"
        showNeighboringMonth={false}
        // locale="en"
        formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
        tileClassName={({ date, view }):any => {
          if (marks.find((x) => x === dayjs(date).format("DD-MM-YYYY"))) {
            return "highlight";
          }
        }}
      />
    </CalendarContainer>
    <Navbar />
  </Container>)
}

const CalendarContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 40px;
`

export default CalendarStamp;