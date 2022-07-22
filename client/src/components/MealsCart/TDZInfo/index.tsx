import * as S from './style';
import { TDZInfoType } from 'customType/meal.type';

function TDZInfo({ nutrient, gram }: TDZInfoType) {
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
