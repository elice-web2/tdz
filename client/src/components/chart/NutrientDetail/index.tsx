// dependencies
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// types
import { ChartInfo } from 'customType/chart.type';
// styles
import * as S from './style';

interface NutrientDetailProps {
  data: ChartInfo['data'];
}

function NutrientDetail({ data }: NutrientDetailProps) {
  return (
    <S.NutrientContainer>
      <S.NutrientHeader>
        <h1>영양정보</h1>
        <span>총 열량</span>
        <p>{data.kcalSum < 0 ? 0 : data.kcalSum.toFixed(0)}kcal</p>
      </S.NutrientHeader>

      <ul>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 탄수화물</span>
          </div>
          <span>{data.carbSum.toFixed(1)}g</span>
        </S.NutrientListItem>
        <S.SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 당류</span>
          </div>
          <span>{data.sugarsSum.toFixed(1)}g</span>
        </S.SubListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 단백질</span>
          </div>
          <span>{data.proteinSum.toFixed(1)}g</span>
        </S.NutrientListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 지방</span>
          </div>
          <span>{data.fatSum.toFixed(1)}g</span>
        </S.NutrientListItem>
        <S.SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 포화지방</span>
          </div>
          <span>{data.saturatedfattySum.toFixed(1)}g</span>
        </S.SubListItem>
        <S.SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 트랜스지방</span>
          </div>
          <span>{data.transfatSum.toFixed(1)}g</span>
        </S.SubListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 콜레스테롤</span>
          </div>
          <span>{data.cholesterolSum.toFixed(1)}mg</span>
        </S.NutrientListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 나트륨</span>
          </div>
          <span>{data.natriumSum.toFixed(1)}mg</span>
        </S.NutrientListItem>
      </ul>
    </S.NutrientContainer>
  );
}

export default NutrientDetail;
