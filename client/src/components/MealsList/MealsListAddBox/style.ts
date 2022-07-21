import styled from 'styled-components';

export const MealsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 70px;
`;

export const AddBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 135px;
  padding: 10px 20px;

  background: rgba(217, 217, 217, 0.15);
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  .GuideInfo {
    font-size: 16px;
  }

  cursor: pointer;
`;
