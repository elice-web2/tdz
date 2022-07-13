import * as S from './style';

interface NutrientTypeProps {
  nutrient: string;
  gram: number;
}

const NutrientInfo = ({ nutrient, gram }: NutrientTypeProps) => {
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
};

export default NutrientInfo;
