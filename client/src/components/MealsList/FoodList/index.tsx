import * as S from './style';

interface FoodsProps {
  foods: string[];
}

const FoodList = ({ foods }: FoodsProps) => {
  const foodArray = ({ foods }: FoodsProps) => {
    if (foods.length <= 3) {
      return foods.map((food) => {
        return food;
      });
    } else {
      const res = [];
      res.push(
        foods.filter((food, idx) => {
          return idx < 3;
        }),
      );
      return res.join(', ');
    }
  };

  return (
    <S.FoodListContainer>
      <span className="FoodList">
        {foodArray({ foods })}
        {foods.length > 3
          ? ' 그 외 ' + (foods.length - 3) + '개'
          : ' ' + foods.length + '개'}
      </span>
    </S.FoodListContainer>
  );
};

export default FoodList;
