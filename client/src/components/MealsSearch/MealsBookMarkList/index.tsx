import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import * as api from '../../../api';
import { MealData } from '../../../customType/meal.type';
import { useEffect, useState } from 'react';

function MealsBookMarkList() {
  const [result, setResult] = useState<MealData[]>();

  useEffect(() => {
    (async () => {
      api.get('/api/favorites').then((res: any) => {
        setResult(res.data);
        console.log('resdata', res.data);
      });
    })();
  }, []);

  useEffect(() => {
    api.get('/api/favorites').then((res: any) => {
      setResult(res.data);
    });
  }, [result]);

  const navigate = useNavigate();

  function deleteBookMark(id: string) {
    api.delete(`/api/favorites/${id}`).then((res) => console.log(res));
  }

  return (
    <S.SearchListContainer>
      {result &&
        result.map((food: any) => {
          return (
            <S.List key={food.meal_id.code}>
              <S.NamedInfo>
                <div
                  className="title"
                  onClick={() => {
                    navigate(`/meals/detail/${food.meal_id.name}`);
                  }}
                >
                  {food.meal_id.name}
                </div>
                <span
                  className="arrowIcon"
                  onClick={() => {
                    navigate(`/meals/detail/${food.meal_id.name}`);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <span className="plusIcon">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span
                  className="starIcon"
                  onClick={() => deleteBookMark(food.meal_id._id)}
                >
                  <img src={require('../../../assets/YellowStar.png')}></img>
                </span>
              </S.NamedInfo>
              <S.QuanInfo>{food.meal_id.quantity}인분</S.QuanInfo>
            </S.List>
          );
        })}
    </S.SearchListContainer>
  );
}
export default MealsBookMarkList;
