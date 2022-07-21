// dependencies
import { ReactNode } from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

// components
import ProgressProvider from '../ProgressProvider';

// styles
import * as S from './style';

interface IDonutProgressbar {
  percentage: number;
  children: ReactNode;
}

// 0 ~ 100 사이의 퍼센테이지를 받고 도넛을 그려주는 컴포넌트
// children 은 도넛 안에 들어갈 텍스트를 받는다.
function DonutProgressbar({ children, percentage }: IDonutProgressbar) {
  return (
    <ProgressProvider valueStart={0} valueEnd={percentage}>
      {(value: number) => (
        <S.DonutContainer>
          <CircularProgressbarWithChildren
            value={value}
            styles={buildStyles({
              pathTransitionDuration: 1,
              pathColor: `rgba(140,158,255, 1)`,
              trailColor: '#d6d6d6',
              backgroundColor: '#8c9eff',
            })}
            strokeWidth={15}
          >
            {children}
          </CircularProgressbarWithChildren>
        </S.DonutContainer>
      )}
    </ProgressProvider>
  );
}

export default DonutProgressbar;
