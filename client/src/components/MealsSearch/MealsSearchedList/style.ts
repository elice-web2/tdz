import styled from 'styled-components';

export const SearchListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

export const List = styled.li`
  width: 90%;
  padding-top: 5px;
  border-bottom: 1px solid gray;
`;
export const NamedInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 10px 10px 10px;

  .arrowIcon {
    font-size: 20px;
    cursor: pointer;
  }

  .title {
    margin-right: 15px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  .plusIcon {
    position: absolute;
    right: 18px;
    top: 60px;
    font-size: 20px;
    cursor: pointer;
  }

  .starIcon img {
    width: 23px;
    height: 23px;
    position: absolute;
    top: 20px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const QuanInfo = styled.p`
  margin-bottom: 20px;
  padding: 3px 10px 10px 13px;
  font-size: 14px;
`;
