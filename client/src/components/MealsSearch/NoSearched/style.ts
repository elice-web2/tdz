import styled from 'styled-components';

export const NoSearchedContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  padding: 30px;
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
`;

export const AddButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.mainColor.normal};
  cursor: pointer;
`;
