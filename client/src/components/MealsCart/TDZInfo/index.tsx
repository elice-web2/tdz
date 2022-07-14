import * as S from './style';

interface TDZInfoProps {
  nutrient: string;
  gram: number | undefined;
}

function TDZInfo({ nutrient, gram }: TDZInfoProps) {
  return (
    <>
      <S.NutrientInfoBox color={nutrient}>
        <div className="nutrient">
          <span className="circle"></span>
          {nutrient}
        </div>
        <div>
          <span className="gram">{gram}</span>g
        </div>
      </S.NutrientInfoBox>
    </>
  );
}

export default TDZInfo;
