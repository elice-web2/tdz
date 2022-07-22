import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 20px 5px;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

export const SearchBox = styled.div`
  position: relative;
  margin: 0 10px;
  font-size: 16px;
  color: gray;
  .searchIcon {
    position: absolute;
    top: 6px;
    left: 10px;
  }

  .XBtn {
    position: absolute;
    top: 7px;
    right: 13px;
    border: none;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 260px;
  height: 30px;
  padding-left: 35px;
  border-radius: 20px;
  border: none;
  background-color: #e8e8e8;
  font-size: 16px;
`;

export const SearchBtn = styled.button`
  width: 60px;
  height: 30px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0 15px 0;
  box-sizing: border-box;
`;

export const SearchTabBtn = styled.button<{
  isSearch: boolean;
}>`
  position: relative;
  width: 180px;
  height: 40px;
  background-color: ${(props) =>
    props.isSearch === true ? '#F7F7F7' : props.theme.mainColor.lighter};
  border: none;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 16px;
  cursor: pointer;
`;

export const BookMarkTabBtn = styled(SearchTabBtn)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) =>
    props.isSearch === false ? '#F7F7F7' : props.theme.mainColor.lighter};
`;
