import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChartInfo } from '../../../customType/chart.type';
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
        <p>{data.kcalSum}kcal</p>
      </S.NutrientHeader>

      <ul>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 탄수화물</span>
          </div>
          <span>{data.carbSum}g</span>
        </S.NutrientListItem>
        <S.SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 당류</span>
          </div>
          <span>{data.sugarsSum}g</span>
        </S.SubListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 단백질</span>
          </div>
          <span>{data.proteinSum}g</span>
        </S.NutrientListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 지방</span>
          </div>
          <span>{data.fatSum}g</span>
        </S.NutrientListItem>
        <S.SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 포화지방</span>
          </div>
          <span>{data.saturatedfattySum}g</span>
        </S.SubListItem>
        <S.SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 트랜스지방</span>
          </div>
          <span>{data.transfatSum}g</span>
        </S.SubListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 콜레스테롤</span>
          </div>
          <span>{data.cholesterolSum}g</span>
        </S.NutrientListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 나트륨</span>
          </div>
          <span>{data.natriumSum}g</span>
        </S.NutrientListItem>
      </ul>
    </S.NutrientContainer>
  );
}

export default NutrientDetail;
