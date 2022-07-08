import { SearchListContainer } from './MealsSearch';
import { ItemsList } from './ItemsList';

export const SearchUlWrapper: React.FC<{ food: string[] }> = (props) => {
  return (
    <SearchListContainer>
      {props.food.map((el) => {
        return <ItemsList name={el}></ItemsList>;
      })}
    </SearchListContainer>
  );
};
