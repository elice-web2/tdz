// dependencies
import { ReactNode } from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import styled from 'styled-components';

// components
import ProgressProvider from './ProgressProvider';

interface IDonutProgressbar {
  percentage: number;
  children: ReactNode;
}

// 0 ~ 100 사이의 퍼센테이지를 받고 도넛을 그려주는 컴포넌트
// children 은 도넛 안에 들어갈 텍스트를 받는다.

export default function DonutProgressbar({
  children,
  percentage,
}: IDonutProgressbar) {
  return (
    <ProgressProvider valueStart={0} valueEnd={percentage}>
      {(value: number) => (
        <DonutContainer>
          <CircularProgressbarWithChildren
            value={value}
            styles={buildStyles({
              pathTransitionDuration: 1,
              pathColor: `rgba(62, 152, 199, ${value / 100})`,
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
            strokeWidth={15}
          >
            {children}
          </CircularProgressbarWithChildren>
        </DonutContainer>
      )}
    </ProgressProvider>
  );
}

const DonutContainer = styled.div`
  width: 50%;
`;
