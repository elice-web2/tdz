import styled from 'styled-components';

export const DonutContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 30px 0;
`;

export const ResponsiveContainer = styled.div`
  ${({ theme }) => theme.flexbox('column')}
`;

export const CalorieContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 16px;

  p {
    padding: 2px 0;
  }
`;

export const NutrientContainer = styled.div`
  margin: 0 20px;
  margin-bottom: 15px;
  padding: 10px;

  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 2px 12px ${({ theme }) => theme.mainColor.lighter};
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 20px 0;
  margin-bottom: 20px;

  button {
    height: 50px;
    padding: 10px 20px;

    background-color: ${({ theme }) => theme.mainColor.darker};
    border: none;
    border-radius: 10px;

    font-size: 16px;
    font-weight: 700;
    color: white;

    cursor: pointer;
  }
`;
