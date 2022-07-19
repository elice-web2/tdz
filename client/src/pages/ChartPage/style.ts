import styled from 'styled-components';

export const FilterContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 20px;

  font-size: 20px;
  font-weight: 700;

  h2 {
    margin: 0 10px;

    cursor: pointer;
  }
`;

export const Filter = styled.h2<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? 'black' : 'rgba(0, 0, 0, 0.4)')};
  margin: 0 10px;

  cursor: pointer;
`;

export const PeriodContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  font-weight: bold;

  svg {
    width: 20px;
    height: 20px;
    padding: 0 10px;

    cursor: pointer;
  }

  span {
    padding: 0 5px;
  }
`;

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
`;

export const NextButton = styled.div<{ isDisable: boolean }>`
  color: ${({ isDisable }) => (isDisable ? '#bbb' : 'black')};
`;
