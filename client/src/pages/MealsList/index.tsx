import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import DateNavigation from '../../components/common/DateNavigation';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Container from '../../components/styles/Container';
import MealsListAddBox from '../../components/MealsList/MealsListAddBox';
import MealsListBox from '../../components/MealsList';
import * as S from './style';
import * as api from '../../api';

interface getMealProps {
  category: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  name: string[];
  _id: string;
}

function MealsList() {
  const [list, setList] = useState<any[]>([]);
  const currentDate = useAppSelector((state) => state.date.value);

  useEffect(() => {
    async function getMealsData(date: string) {
      const data = await api.get(`/api/mealhistory/${date}`);
      setList(data?.data);
    }
    getMealsData(currentDate);
  }, [currentDate]);

  const sortMealList = () => {
    const tmp = [];
    tmp.push(
      list.filter((e) => {
        return e.category === '아침';
      }),
    );
    tmp.push(
      list.filter((e) => {
        return e.category === '점심';
      }),
    );
    tmp.push(
      list.filter((e) => {
        return e.category === '저녁';
      }),
    );
    tmp.push(
      list.filter((e) => {
        return e.category === '간식';
      }),
    );

    return tmp;
  };

  console.log(sortMealList());

  return (
    <Container>
      <Logo />
      <DateNavigation />
      <S.MealsListContainerBox>
        <MealsListBox
          time={'점심'}
          calorie={300}
          foods={['신라면', '단무지', '군만두', '김밥']}
          nutrientGram={[300, 100, 200]}
        />
      </S.MealsListContainerBox>
      <MealsListAddBox />
      <Navbar />
    </Container>
  );
}

export default MealsList;
