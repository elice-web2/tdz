import { adjectives, animals, plants } from '../types/nicknames';

function getRandomInteger(max: number) {
  return Math.floor(Math.random() * max);
}

const getRandomNickname = () => {
  const type: number = getRandomInteger(2);

  let noun;
  if (type === 1) noun = animals[getRandomInteger(animals.length)];
  else noun = plants[getRandomInteger(plants.length)];

  const adjective = adjectives[getRandomInteger(adjectives.length)];

  //네자리 이하 숫자 생성 후에 string으로 변환
  const numString: string = String(getRandomInteger(10000));
  const randomNum: string =
    numString.length >= 4
      ? numString
      : new Array(4 - numString.length + 1).join('0') + numString;

  return `${adjective} ${noun}_${randomNum}`;
};

export { getRandomNickname };
