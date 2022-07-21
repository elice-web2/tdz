import styled from 'styled-components';
import { theme } from 'theme';

export const NutrientInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nutrient {
    width: 90px;
    position: relative;
    margin: 0 5px 5px 5px;
  }

  .circle {
    left: -25px;
    top: 2px;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 2px 5px;
    background-color: ${({ color }) => {
      if (color === '탄수화물') {
        return theme.mainColor.carb;
      } else if (color === '단백질') {
        return theme.mainColor.protein;
      } else {
        return theme.mainColor.fat;
      }
    }};
    border-radius: 50%;
  }

  .gram {
    font-size: 24px;
    font-weight: bold;
  }

  @media (max-width: 400px) {
    .nutrient {
      width: 70px;
      font-size: 12px;
    }

    .gram {
      font-size: 16px;
    }
  }
`;
