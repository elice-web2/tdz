import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
`;
