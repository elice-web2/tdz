import styled from 'styled-components';
import DonutProgressbar from '../components/home/DonutProgressbar';
import Container from '../components/styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import DateNavigation from '../components/common/DateNavigation';
import Progressbar from '../components/home/Progressbar';
import Logo from '../components/common/Logo';
import Navbar from '../components/common/Navbar';

export default function Home() {
  return (
    <Container>
      <Logo />
      <DateNavigation />
      <DonutContainer>
        {/* 목표 칼로리 / 현재 칼로리 * 100 백분율 계산해서 기입 필요 */}
        <DonutProgressbar percentage={66}>
          <CalorieContainer>
            {/* 현재 칼로리 */}
            <p>700 kcal</p>
            {/* 목표 칼로리  */}
            <p>/ 1000 kcal</p>
          </CalorieContainer>
        </DonutProgressbar>
      </DonutContainer>

      <NutrientContainer>
        <Progressbar
          title={'탄수화물'}
          percent={50}
          currentValue="120g"
          goalValue="240g"
          color="#FAA0A0"
        />
        <Progressbar
          title={'단백질'}
          percent={20}
          currentValue="20g"
          goalValue="100g"
          color="#00D287"
        />
        <Progressbar
          title={'지방'}
          percent={70}
          currentValue="70g"
          goalValue="100g"
          color="#FAF461"
        />
      </NutrientContainer>

      <ResponsiveContainer>
        <Span>오늘의 몸무게를 기록하세요!</Span>
        <WeightContainer>
          <p>60kg</p>
          <FontAwesomeIcon icon={faPen} />
        </WeightContainer>

        <ButtonContainer>
          <button>식단 추가하기</button>
        </ButtonContainer>
      </ResponsiveContainer>
      <Navbar />
    </Container>
  );
}

const DonutContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 30px 0;
`;

const ResponsiveContainer = styled.div`
  ${({ theme }) => theme.flexbox('column')}
`;

const CalorieContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 16px;

  p {
    padding: 5px 0;
  }
`;

const NutrientContainer = styled.div`
  height: 200px;
  margin: 0 20px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 20px 0;

  button {
    height: 50px;
    padding: 10px 20px;

    background-color: ${({ theme }) => theme.mainColor.normal};
    border: none;
    border-radius: 10px;

    font-size: 16px;
    font-weight: 700;
    color: white;
  }
`;

const WeightContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 10px 0 20px 0;

  p {
    font-size: 3rem;
    font-weight: 700;
  }

  svg {
    margin: 5px 0 0 10px;
    width: 20px;
    height: 20px;

    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 12px;

  padding-top: 20px;
`;
