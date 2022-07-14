// import * as S from './style';
import styled from 'styled-components';

function NoSearched() {
  return <NoSearchedContainer>검색결과가 없습니다.</NoSearchedContainer>;
}

const NoSearchedContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  padding: 30px;
  margin: 100px 0;
  text-align: center;
`;

export default NoSearched;
