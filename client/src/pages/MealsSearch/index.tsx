import * as S from './style';
import * as api from '../../api';
import React, { useState, useRef, useEffect } from 'react';
import { MealData } from '../../customType/meal.type';
import Container from '../../components/styles/Container';
import Navbar from '../../components/common/Navbar';
import MealsSearchedList from '../../components/MealsSearch/MealsSearchedList';
import MealsBookMarkList from '../../components/MealsSearch/MealsBookMarkList';
import { ScrollContainer } from '../../components/styles/ScrollContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import CartIcon from '../../components/common/CartIcon';

function MealsSearch() {
  const navigate = useNavigate();
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );
  const [isSearch, setIsSearch] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [searchedResult, setSearchedResult] = useState<MealData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function deleteInputHandler() {
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function onChangeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function focusHandler() {
    setIsSearch(true);
  }

  function inputSubmitHandler() {
    api.get(`/api/meal/${inputValue}`).then((res: any) => {
      console.log(res);
      setSearchedResult(res.data);
    });
  }

  function moveSearchTab() {
    setIsSearch(true);
    inputRef.current && inputRef.current.focus();
  }

  function moveBookMarkTab() {
    setIsSearch(false);
  }
  useEffect(() => {
    if (!inputValue) {
      setSearchedResult([]);
    }
  }, [inputValue]);

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, [is_login_first, isLogin]);

  return (
    <Container>
      <ScrollContainer minusHeight={60}>
        <S.SearchForm
          onSubmit={(e) => {
            e.preventDefault();
            inputSubmitHandler();
          }}
        >
          <S.SearchBox>
            <span className="searchIcon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span className="XBtn" onClick={deleteInputHandler}>
              X
            </span>
            <S.SearchInput
              type="text"
              value={inputValue}
              ref={inputRef}
              onChange={onChangeInputHandler}
              onFocus={focusHandler}
            ></S.SearchInput>
          </S.SearchBox>
          <S.SearchBtn type="submit">검색</S.SearchBtn>
        </S.SearchForm>
        <S.ButtonContainer>
          <S.SearchTabBtn isSearch={isSearch} onClick={moveSearchTab}>
            검색
          </S.SearchTabBtn>
          <S.BookMarkTabBtn isSearch={isSearch} onClick={moveBookMarkTab}>
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
      </ScrollContainer>
      <CartIcon />
      <Navbar />
    </Container>
  );
}

export default MealsSearch;
