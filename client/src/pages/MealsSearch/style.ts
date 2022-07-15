import styled from 'styled-components';
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 420px;
  padding: 20px 5px;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

export const SearchBox = styled.div`
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

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 35px;
  border-radius: 20px;
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
  width: 420px;
  margin: 20px 0 15px 0;
  box-sizing: border-box;
`;

export const SearchTabBtn = styled.button<{ isSearch: boolean }>`
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

export const BookMarkTabBtn = styled(SearchTabBtn)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) =>
    props.isSearch === true ? '#f7f7f7' : props.theme.mainColor.lighter};
`;
