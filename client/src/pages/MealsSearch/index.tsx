// dependencies
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// components
import Container from 'components/styles/Container';
import Navbar from 'components/common/Navbar';
import MealsSearchedList from 'components/MealsSearch/MealsSearchedList';
import MealsBookMarkList from 'components/MealsSearch/MealsBookMarkList';
import { ScrollContainer } from 'components/styles/ScrollContainer';
import CartIcon from 'components/common/CartIcon';
// types
import { MealData } from 'customType/meal.type';
// hooks
import { useAppSelector } from 'hooks';
// styles
import * as S from './style';
// etc
import * as api from 'api';

enum TAB_NM {
  SEARCH = 'SEARCH',
  MY_FAVORITE = 'MY_FAVORITE',
}

function MealsSearch() {
  const navigate = useNavigate();
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );
  const [inputValue, setInputValue] = useState('');
  const [searchedResult, setSearchedResult] = useState<MealData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const queryStrings = new URLSearchParams(window.location.search);
  const qsTabNm = queryStrings.get('tabNm');

  function deleteInputHandler() {
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function onChangeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function inputSubmitHandler() {
    api.get(`/api/meal/${inputValue}`).then((res: any) => {
      console.log(res);
      setSearchedResult(res.data);
    });
  }

  function moveSearchTab() {
    navigate(`/meals/search?tabNm=${TAB_NM.SEARCH}`);
    inputRef.current && inputRef.current.focus();
  }

  function moveBookMarkTab() {
    navigate(`/meals/search?tabNm=${TAB_NM.MY_FAVORITE}`);
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
              onFocus={() => {
                navigate(`/meals/search?tabNm=${TAB_NM.SEARCH}`);
              }}
            ></S.SearchInput>
          </S.SearchBox>
          <S.SearchBtn type="submit">검색</S.SearchBtn>
        </S.SearchForm>
        <S.ButtonContainer>
          <S.SearchTabBtn
            isSearch={qsTabNm === TAB_NM.MY_FAVORITE}
            onClick={moveSearchTab}
          >
            검색
          </S.SearchTabBtn>
          <S.BookMarkTabBtn
            isSearch={qsTabNm === TAB_NM.MY_FAVORITE}
            onClick={moveBookMarkTab}
          >
            즐겨찾기
          </S.BookMarkTabBtn>
        </S.ButtonContainer>
        {qsTabNm === TAB_NM.MY_FAVORITE ? (
          <MealsBookMarkList></MealsBookMarkList>
        ) : (
          <MealsSearchedList
            inputValue={inputValue}
            result={searchedResult}
          ></MealsSearchedList>
        )}
      </ScrollContainer>
      <CartIcon />
      <Navbar />
    </Container>
  );
}

export default MealsSearch;
