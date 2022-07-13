import * as S from './style';

interface FoodsProps {
  foods: string[];
}

const FoodList = ({ foods }: FoodsProps) => {
  return (
    <S.FoodListContainer>
      <span className="FoodList">
        {foods.map((food) => {
          return food + ', ';
        })}{' '}
        그 외 {foods.length}개
      </span>
    </S.FoodListContainer>
  );
};

export default FoodList;
