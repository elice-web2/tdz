import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export default function NutrientDetail({ data }: { data: any }) {
  return (
    <NutrientContainer>
      <NutrientHeader>
        <h1>영양정보</h1>
        <span>총 열량</span>
        <p>{data.칼로리합}kcal</p>
      </NutrientHeader>

      <ul>
        <NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 탄수화물</span>
          </div>
          <span>{data.탄수화물합}g</span>
        </NutrientListItem>
        <SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 당류</span>
          </div>
          <span>{data.당류합}g</span>
        </SubListItem>
        <NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 단백질</span>
          </div>
          <span>{data.단백질합}g</span>
        </NutrientListItem>
        <NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 지방</span>
          </div>
          <span>{data.지방합}g</span>
        </NutrientListItem>
        <SubListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 포화지방</span>
          </div>
          <span>{data.포화지방합}g</span>
        </SubListItem>
        <NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 콜레스테롤</span>
          </div>
          <span>{data.콜레스테롤합}g</span>
        </NutrientListItem>
        <NutrientListItem>
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <span> 나트륨</span>
          </div>
          <span>{data.나트륨합}g</span>
        </NutrientListItem>
      </ul>
    </NutrientContainer>
  );
}

const NutrientContainer = styled.div`
  margin: 0 20px;
  padding-bottom: 50px;
`;

const NutrientHeader = styled.div`
  padding: 20px 0;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  h1 {
    padding-bottom: 20px;

    font-size: 18px;
  }

  span {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 22px;
    font-weight: bold;
  }
`;

const NutrientListItem = styled.ol`
  ${({ theme }) => theme.flexbox('row', 'center', 'space-between')}

  padding: 15px 10px;

  font-size: 14px;

  svg {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const SubListItem = styled(NutrientListItem)`
  padding: 0 10px 10px 30px;

  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);

  svg {
    font-size: 6px;
  }
`;
