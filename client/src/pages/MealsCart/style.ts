import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 420px;
  margin: 0 auto;
  background-color: white;
`;

export const NutrientInfoContainer = styled.div`
  width: 100%;
  height: 240px;
  margin-bottom: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: ${({ theme }) => theme.mainColor.normal};
`;

export const IconBox = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 25px;
  box-sizing: border-box;

  .arrow-icon {
    margin-left: 5px;
    cursor: pointer;
  }
`;

interface ChildrenProps {
  children: any;
}
export const TotalKcalBox = styled.div<ChildrenProps>`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 40px 0;
  font-size: 28px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
`;

export const TdzBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-left: 5px;
`;

export const MealsListContainer = styled.ul`
  width: 100%;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const AddMealsBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

export const RecordBtn = styled(AddMealsBtn)`
  background-color: ${({ theme }) => theme.mainColor.darker};
`;
