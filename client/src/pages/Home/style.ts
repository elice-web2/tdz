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
  height: 200px;
  margin: 0 20px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 20px 0;

  button {
    height: 50px;
    padding: 10px 20px;

    background-color: ${({ theme }) => theme.mainColor.normal};
    border: none;
    border-radius: 10px;

    font-size: 16px;
    font-weight: 700;
    color: white;

    cursor: pointer;
  }
`;
