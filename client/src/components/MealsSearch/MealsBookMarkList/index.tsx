import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
interface testDBObjType {
  code: string;
  name: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  sugars: number;
  natruim: number;
  cholesterol: number;
  saturatedfatty: number;
  transfat: number;
}

const testDB: testDBObjType[] = [
  {
    code: '01',
    name: '라면',
    kcal: 462.39,
    carb: 89.7,
    protein: 6.8,
    fat: 8.5,
    sugars: 6.3,
    natruim: 3206.03,
    cholesterol: 0,
    saturatedfatty: 1.2,
    transfat: 0,
  },
  {
    code: '02',
    name: '비빔라면',
    kcal: 462.39,
    carb: 89.7,
    protein: 6.8,
    fat: 8.5,
    sugars: 6.3,
    natruim: 3206.03,
    cholesterol: 0,
    saturatedfatty: 1.2,
    transfat: 0,
  },
  {
    code: '03',
    name: '라면볶이',
    kcal: 462.39,
    carb: 89.7,
    protein: 6.8,
    fat: 8.5,
    sugars: 6.3,
    natruim: 3206.03,
    cholesterol: 0,
    saturatedfatty: 1.2,
    transfat: 0,
  },
  {
    code: '04',
    name: '신라면',
    kcal: 462.39,
    carb: 89.7,
    protein: 6.8,
    fat: 8.5,
    sugars: 6.3,
    natruim: 3206.03,
    cholesterol: 0,
    saturatedfatty: 1.2,
    transfat: 0,
  },
  {
    code: '05',
    name: '밥',
    kcal: 462.39,
    carb: 89.7,
    protein: 6.8,
    fat: 8.5,
    sugars: 6.3,
    natruim: 3206.03,
    cholesterol: 0,
    saturatedfatty: 1.2,
    transfat: 0,
  },
  {
    code: '06',
    name: '치킨',
    kcal: 462.39,
    carb: 89.7,
    protein: 6.8,
    fat: 8.5,
    sugars: 6.3,
    natruim: 3206.03,
    cholesterol: 0,
    saturatedfatty: 1.2,
    transfat: 0,
  },
];

function MealsBookMarkList() {
  const bookMarkArr = useAppSelector(({ bookMark }) => bookMark.value);
  //meal_id로 db에 조회해서 얻은 변환된 데이터Arr
  const filteredDB = testDB.filter((el, idx) => {
    return bookMarkArr.findIndex((item) => item.meal_id === el.code) === idx;
  });
  const navigate = useNavigate();

  return (
    <S.SearchListContainer>
      {filteredDB.map((food) => {
        return (
          <S.List key={food.code}>
            <S.NamedInfo>
              <div className="title">{food.name}</div>
              <span
                className="arrowIcon"
                onClick={() => {
                  navigate(`/meals/detail/${food.code}`);
                }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <span className="plusIcon">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span className="starIcon">
                <img src={require('../../../assets/YellowStar.png')}></img>
              </span>
            </S.NamedInfo>
            <S.QuanInfo>1인분</S.QuanInfo>
          </S.List>
        );
      })}
    </S.SearchListContainer>
  );
}
export default MealsBookMarkList;
