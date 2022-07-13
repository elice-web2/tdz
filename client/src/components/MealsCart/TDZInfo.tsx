import styled from 'styled-components';

export const TDZInfo: React.FC<{ nutrient: string; gram: number }> = (
  props,
) => {
  return (
    <>
      <NutrientInfoBox color={props.nutrient}>
        <div className="nutrient">
          <span className="circle"></span>
          {props.nutrient}
        </div>
        <div>
          <span className="gram">{props.gram}</span>g
        </div>
      </NutrientInfoBox>
    </>
  );
};

const NutrientInfoBox = styled.div`
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
    font-size: 28px;
    font-weight: bold;
  }
`;
