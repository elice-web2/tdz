import styled from 'styled-components';
import { theme } from 'theme';

export const NutrientInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nutrient {
    position: relative;
    margin-bottom: 5px;
  }

  .circle {
    position: absolute;
    left: -25px;
    top: 2px;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 10px;
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
    font-size: 28px;
    font-weight: bold;
  }
`;
