import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './style';

function NutrientDetail({ data }: { data: any }) {
  return (
    <S.NutrientContainer>
      <S.NutrientHeader>
        <h1>영양정보</h1>
        <span>총 열량</span>
        <p>{data.칼로리합}kcal</p>
      </S.NutrientHeader>

      <ul>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 탄수화물</span>
          </div>
          <span>{data.탄수화물합}g</span>
        </S.NutrientListItem>
        <S.SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 당류</span>
          </div>
          <span>{data.당류합}g</span>
        </S.SubListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 단백질</span>
          </div>
          <span>{data.단백질합}g</span>
        </S.NutrientListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 지방</span>
          </div>
          <span>{data.지방합}g</span>
        </S.NutrientListItem>
        <S.SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 포화지방</span>
          </div>
          <span>{data.포화지방합}g</span>
        </S.SubListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 콜레스테롤</span>
          </div>
          <span>{data.콜레스테롤합}g</span>
        </S.NutrientListItem>
        <S.NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 나트륨</span>
          </div>
          <span>{data.나트륨합}g</span>
        </S.NutrientListItem>
      </ul>
    </S.NutrientContainer>
  );
}

export default NutrientDetail;
