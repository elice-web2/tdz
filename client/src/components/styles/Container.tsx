import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <BackGround />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.01);
  height: 100vh;
  width: 100vw;
  z-index: -100;
`;

const Wrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  background-color: white;
`;
