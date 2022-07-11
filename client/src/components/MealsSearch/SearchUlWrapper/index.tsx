import MealsSearchedList from '../MealsSearchedList';
import * as S from './style';

interface SearchUlWrapperProps {
  food: string[];
}

function SearchUlWrapper({ food }: SearchUlWrapperProps) {
  return (
    <S.SearchListContainer>
      {food.map((el) => {
        return <MealsSearchedList name={el}></MealsSearchedList>;
      })}
    </S.SearchListContainer>
  );
}

export default SearchUlWrapper;
