// dependencies
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
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
  const [inputValue, setInputValue] = useState('');
  const [noSearched, setNoSearched] = useState(false);
  const [searchedResult, setSearchedResult] = useState<MealData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  const queryStrings = new URLSearchParams(window.location.search);
  const qsTabNm = queryStrings.get('tabNm');

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, [is_login_first, isLogin]);

  useEffect(() => {
    if (!inputValue) {
      setSearchedResult([]);
    }
  }, [inputValue]);

  //검색창 비워주고 focus해주는 함수
  function deleteInputHandler() {
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  //검색어 입력되는거 바꿔주는 함수
  function onChangeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  //검색 submit 함수
  async function inputSubmitHandler() {
    try {
      const res = await api.get(`/api/meal/${inputValue}`);
      setSearchedResult(res.data);
      setNoSearched(false);
    } catch {
      setNoSearched(true);
      throw new Error('검색된 결과가 없습니다.');
    }
  }

  //검색탭으로 이동시켜주는 함수
  function moveSearchTab() {
    navigate(`/meals/search?tabNm=${TAB_NM.SEARCH}`);
    inputRef.current && inputRef.current.focus();
  }

  //즐겨찾기탭으로 이동시켜주는 함수
  function moveBookMarkTab() {
    navigate(`/meals/search?tabNm=${TAB_NM.MY_FAVORITE}`);
  }

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
              <FontAwesomeIcon icon={faXmark} />
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
            noSearched={noSearched}
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
