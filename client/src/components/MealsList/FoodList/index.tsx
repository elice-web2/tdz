import * as S from './style';

interface FoodsProps {
  foods: string[];
}

const FoodList = ({ foods }: FoodsProps) => {
  const foodArray = ({ foods }: FoodsProps) => {
    if (foods.length <= 2) {
      return foods.map((food) => {
        return food;
      });
    } else {
      const res = [];
      res.push(
        foods.filter((food, idx) => {
          return idx < 2;
        }),
      );
      return res.join(', ');
    }
  };

  return (
    <S.FoodListContainer>
      <span className="FoodList">
        {foodArray({ foods })}
        {foods.length > 2
          ? ' 그 외 ' + (foods.length - 2) + '개'
          : ' ' + foods.length + '개'}
      </span>
    </S.FoodListContainer>
  );
};

export default FoodList;
