import styled from 'styled-components';
import { useState, useRef } from 'react';
import Container from '../../components/styles/Container';
import Navbar from '../../components/common/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchUlWrapper from '../../components/MealsSearch/SearchUlWrapper';

const MealsSearch: React.FC = () => {
  const [isSearch, setIsSearch] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <SearchContainer>
        <SearchBox>
          <span className="searchIcon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <button
            className="XBtn"
            onClick={() => {
              setInputValue('');
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
          >
            X
          </button>
          <SearchInput
            type="text"
            value={inputValue}
            ref={inputRef}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(event.target.value);
            }}
            onFocus={() => {
              setIsSearch(true);
            }}
          ></SearchInput>
        </SearchBox>
        <SearchBtn type="submit">검색</SearchBtn>
      </SearchContainer>
      <ButtonContainer>
        <SearchTabBtn
          isSearch={isSearch}
          onClick={() => {
            setIsSearch(true);
            setInputValue('');
            inputRef.current && inputRef.current.focus();
          }}
        >
          검색
        </SearchTabBtn>
        <BookMarkTabBtn
          isSearch={isSearch}
          onClick={() => {
            setIsSearch(false);
            setInputValue('');
          }}
        >
          즐겨찾기
        </BookMarkTabBtn>
      </ButtonContainer>
      {isSearch ? (
        <SearchUlWrapper
          food={['신라면', '짜파게티', '불닭볶음면']}
        ></SearchUlWrapper>
      ) : (
        <SearchUlWrapper food={['밥', '된장찌개']}></SearchUlWrapper>
      )}

      <Navbar />
    </Container>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  padding: 20px 5px;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const SearchBox = styled.div`
  position: relative;
  margin: 0 10px;

  .searchIcon {
    position: absolute;
    top: 8px;
    left: 10px;
    font-size: 18px;
  }

  .XBtn {
    position: absolute;
    top: 9px;
    right: 13px;
    background-color: white;
    border: none;
    font-size: 16px;
    color: gray;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 35px;
  border-radius: 20px;
  font-size: 16px;
`;

const SearchBtn = styled.button`
  width: 60px;
  height: 30px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 420px;
  margin: 20px 0 15px 0;
  box-sizing: border-box;
`;

const SearchTabBtn = styled.button<{ isSearch: boolean }>`
  position: relative;
  width: 180px;
  height: 40px;
  background-color: ${(props) =>
    props.isSearch === true ? props.theme.mainColor.lighter : '#f7f7f7'};
  border: none;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 16px;
  cursor: pointer;
`;

const BookMarkTabBtn = styled(SearchTabBtn)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) =>
    props.isSearch === true ? '#f7f7f7' : props.theme.mainColor.lighter};
`;

export default MealsSearch;
