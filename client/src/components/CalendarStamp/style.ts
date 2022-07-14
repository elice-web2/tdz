import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.2);

  z-index: 80;
`;

export const CalendarContainer = styled.div`
  position: absolute;
  top: 110px;

  max-width: 420px;

  width: 100%;

  z-index: 99;
`;
