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
    padding: 5px 0;
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
  }
`;

export const WeightContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 10px 0 20px 0;

  p {
    font-size: 3rem;
    font-weight: 700;
  }

  svg {
    margin: 5px 0 0 10px;
    width: 20px;
    height: 20px;

    cursor: pointer;
  }
`;

export const Span = styled.span`
  font-size: 12px;

  padding-top: 20px;
`;
