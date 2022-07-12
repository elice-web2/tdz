import * as S from './style';
import { useState, useRef } from 'react';
import Container from '../../components/styles/Container';
import Navbar from '../../components/common/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MealsSearchedList from '../../components/MealsSearch/MealsSearchedList';
import MealsBookMarkList from '../../components/MealsSearch/MealsBookMarkList';

function MealsSearch() {
  const [isSearch, setIsSearch] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <S.SearchContainer>
        <S.SearchBox>
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
          <S.SearchInput
            type="text"
            value={inputValue}
            ref={inputRef}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(event.target.value);
            }}
            onFocus={() => {
              setIsSearch(true);
            }}
          ></S.SearchInput>
        </S.SearchBox>
        <S.SearchBtn
          onClick={() => {
            if (inputRef.current) {
              setInputValue(inputRef.current.value);
            }
          }}
        >
          검색
        </S.SearchBtn>
      </S.SearchContainer>
      <S.ButtonContainer>
        <S.SearchTabBtn
          isSearch={isSearch}
          onClick={() => {
            setIsSearch(true);
            setInputValue('');
            inputRef.current && inputRef.current.focus();
          }}
        >
          검색
        </S.SearchTabBtn>
        <S.BookMarkTabBtn
          isSearch={isSearch}
          onClick={() => {
            setIsSearch(false);
            setInputValue('');
          }}
        >
          즐겨찾기
        </S.BookMarkTabBtn>
      </S.ButtonContainer>
      {isSearch ? (
        <MealsSearchedList inputValue={inputValue}></MealsSearchedList>
      ) : (
        <MealsBookMarkList></MealsBookMarkList>
      )}
      <Navbar />
    </Container>
  );
}

export default MealsSearch;
