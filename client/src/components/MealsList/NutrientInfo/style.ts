import styled from 'styled-components';

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
        return 'pink';
      } else if (color === '단백질') {
        return '#6ff542';
      } else {
        return 'yellow';
      }
    }};
    border-radius: 50%;
  }

  .gram {
    font-size: 24px;
    font-weight: bold;
  }

  .지방 {
    position: relative;
    right: 5px;
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
