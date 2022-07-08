import { useEffect, useState } from 'react';

interface ProgressProviderProps {
  valueStart: number;
  valueEnd: number;
  children: (arg: number) => JSX.Element;
}

const ProgressProvider = ({
  valueStart,
  valueEnd,
  children,
}: ProgressProviderProps) => {
  // 도넛 애니메이션을 위한 컴포넌트
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

export default ProgressProvider;
