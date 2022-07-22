import styled from 'styled-components';

export const CartBox = styled.div`
  position: fixed;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid lightgray;
  font-size: 25px;
  text-align: center;
  box-shadow: 1px 1px 5px lightgray;
  z-index: 1;

  margin-left: 10px;

  background-color: rgba(255, 255, 255, 0.8);
  color: #404040;
  cursor: pointer;

  span {
    display: relative;
  }
`;

export const Badge = styled.div`
  position: absolute;
  right: 8px;
  top: 12px;
  width: 15px;
  height: 15px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.mainColor.normal};
  color: white;

  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
`;
