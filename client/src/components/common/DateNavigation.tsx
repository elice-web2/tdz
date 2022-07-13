import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function DateNavigation() {
  const navigate = useNavigate();
  const clickCalendarHandler = () => {
    navigate("/calendar");
  }
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faAngleLeft} />

      <DateContainer onClick={clickCalendarHandler}>
        <p>오늘</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </DateContainer>
      <FontAwesomeIcon icon={faAngleRight} />
    </Wrapper>
  );
}

export default DateNavigation;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 20px 0;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  svg {
    padding: 0 10px;

    width: 20px;
    height: 20px;
  }
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  
  svg {
    padding: 0;
    width: 12px;
    height: 12px;
  }
`;
