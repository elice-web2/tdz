import Container from '../../components/styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import DateNavigation from '../../components/common/DateNavigation';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Progressbar from '../../components/home/Progressbar';
import DonutProgressbar from '../../components/home/DonutProgressbar';
import * as S from './style';

function Home() {
  return (
    <Container>
      <Logo />
      <DateNavigation />
      <S.DonutContainer>
        {/* 목표 칼로리 / 현재 칼로리 * 100 백분율 계산해서 기입 필요 */}
        <DonutProgressbar percentage={66}>
          <S.CalorieContainer>
            {/* 현재 칼로리 */}
            <p>700 kcal</p>
            {/* 목표 칼로리  */}
            <p>/ 1000 kcal</p>
          </S.CalorieContainer>
        </DonutProgressbar>
      </S.DonutContainer>

      <S.NutrientContainer>
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
      </S.NutrientContainer>

      <S.ResponsiveContainer>
        <S.Span>오늘의 몸무게를 기록하세요!</S.Span>
        <S.WeightContainer>
          <p>60kg</p>
          <FontAwesomeIcon icon={faPen} />
        </S.WeightContainer>

        <S.ButtonContainer>
          <button>식단 추가하기</button>
        </S.ButtonContainer>
      </S.ResponsiveContainer>
      <Navbar />
    </Container>
  );
}

export default Home;
