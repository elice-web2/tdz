import * as S from './style';
import { useState, useRef, useEffect } from 'react';
import Container from '../../components/styles/Container';
import Navbar from '../../components/common/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MealsSearchedList from '../../components/MealsSearch/MealsSearchedList';
import MealsBookMarkList from '../../components/MealsSearch/MealsBookMarkList';
import * as api from '../../api';
import { MealData } from '../../customType/meal.type';

function MealsSearch() {
  const [isSearch, setIsSearch] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [searchedResult, setSearchedResult] = useState<MealData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputValue) {
      setSearchedResult([]);
    }
  }, [inputValue]);

  function inputSubmitHandler() {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
      api.get(`/api/meal/${inputValue}`).then((res: any) => {
        setSearchedResult(res.data);
      });
    }
  }

  return (
    <Container>
      <S.SearchForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
            onKeyPress={(e) => {
              e.preventDefault();
              if (e.key === 'Enter') {
                inputSubmitHandler();
              }
            }}
          ></S.SearchInput>
        </S.SearchBox>
        <S.SearchBtn onClick={() => inputSubmitHandler()}>검색</S.SearchBtn>
      </S.SearchForm>
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
        <MealsSearchedList
          inputValue={inputValue}
          result={searchedResult}
        ></MealsSearchedList>
      ) : (
        <MealsBookMarkList></MealsBookMarkList>
      )}
      <Navbar />
    </Container>
  );
}

export default MealsSearch;
