import styled from 'styled-components';

export const NutrientContainer = styled.div`
  margin: 0 20px;
  padding-bottom: 50px;
`;

export const NutrientHeader = styled.div`
  padding: 20px 0;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  h1 {
    padding-bottom: 20px;

    font-size: 18px;
  }

  span {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const NutrientListItem = styled.ol`
  ${({ theme }) => theme.flexbox('row', 'center', 'space-between')}

  padding: 15px 10px;

  font-size: 14px;

  svg {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const SubListItem = styled(NutrientListItem)`
  padding: 0 10px 10px 30px;

  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);

  svg {
    font-size: 6px;
  }
`;
