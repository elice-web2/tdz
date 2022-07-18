import styled from 'styled-components';

export const ScrollContainer = styled.div<{ minusHeight: number }>`
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - ${({ minusHeight }) => minusHeight}px);

  &::-webkit-scrollbar {
    width: 4px;
    margin-right: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;
