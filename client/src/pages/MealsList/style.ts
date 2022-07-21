import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export const MealsListContainerBox = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;
