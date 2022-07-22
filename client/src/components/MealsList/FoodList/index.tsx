import * as S from './style';

interface FoodsProps {
  foods: string[];
  quantity: number[];
}

const FoodList = ({ foods, quantity }: FoodsProps) => {
  const foodArray = ({ foods, quantity }: FoodsProps) => {
    const res = [];
    if (foods.length <= 3) {
      for (let i = 0; i < foods.length; i++) {
        res.push(foods[i] + ' ' + quantity[i] + '개');
      }
      return res.join(', ');
    } else {
      for (let i = 0; i < 3; i++) {
        res.push(foods[i] + quantity[i] + '개');
      }
      return res.join(', ') + ' 그 외 ' + (foods.length - 3) + '개';
    }
  };

  return (
    <S.FoodListContainer>
      <span className="FoodList">{foodArray({ foods, quantity })}</span>
    </S.FoodListContainer>
  );
};

export default FoodList;
