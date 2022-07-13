import styled from 'styled-components';

export const MealsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

export const AddBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 330px;
  height: 150px;
  padding: 10px 20px;

  border: thin solid black;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.mainColor.lighter};

  .GuideInfo {
    font-size: 16px;
  }
`;
