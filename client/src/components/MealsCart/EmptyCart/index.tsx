import styled from 'styled-components';

function EmptyCart() {
  return <EmptyCartContainer>추가된 식단이 없습니다.</EmptyCartContainer>;
}

const EmptyCartContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  padding: 30px;
  margin: 100px 0;
  text-align: center;
`;

export default EmptyCart;
