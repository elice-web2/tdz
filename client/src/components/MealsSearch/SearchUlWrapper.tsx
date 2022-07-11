import ItemsList from './ItemsList';
import styled from 'styled-components';

const SearchUlWrapper: React.FC<{ food: string[] }> = (props) => {
  return (
    <SearchListContainer>
      {props.food.map((el) => {
        return <ItemsList name={el}></ItemsList>;
      })}
    </SearchListContainer>
  );
};

const SearchListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

export default SearchUlWrapper;
