import * as S from './style';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MealsCartModalProps {
  setOpenModal: (value: boolean) => void;
}

function MealsCartModal({ setOpenModal }: MealsCartModalProps) {
  const morningRef = useRef<HTMLButtonElement>(null);
  const lunchRef = useRef<HTMLButtonElement>(null);
  const dinnerRef = useRef<HTMLButtonElement>(null);
  const snacksRef = useRef<HTMLButtonElement>(null);
  const [isMorning, setIsMorning] = useState(false);
  const [isLunch, setIsLunch] = useState(false);
  const [isDinner, setIsDinner] = useState(false);
  const [isSnacks, setIsSnacks] = useState(false);
  const navigate = useNavigate();

  function modalCloseHandler() {
    setOpenModal(false);
  }

  return (
    <S.Container>
      <S.OutsideModal onClick={modalCloseHandler}></S.OutsideModal>
      <S.ModalContainer>
        <S.XBtn
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </S.XBtn>
        <S.Title>식사 종류</S.Title>
        <S.BtnContainer
          morning={isMorning}
          lunch={isLunch}
          dinner={isDinner}
          snacks={isSnacks}
        >
          <button
            className="morning"
            ref={morningRef}
            onClick={() => {
              setIsMorning((cur) => !cur);
            }}
          >
            아침
          </button>
          <button
            className="lunch"
            ref={lunchRef}
            onClick={() => {
              setIsLunch((cur) => !cur);
            }}
          >
            점심
          </button>
          <button
            className="dinner"
            ref={dinnerRef}
            onClick={() => {
              setIsDinner((cur) => !cur);
            }}
          >
            저녁
          </button>
          <button
            className="snacks"
            ref={snacksRef}
            onClick={() => {
              setIsSnacks((cur) => !cur);
            }}
          >
            간식
          </button>
        </S.BtnContainer>

        <S.CompleteBtn
          onClick={() => {
            navigate('/meals');
          }}
        >
          완료
        </S.CompleteBtn>
      </S.ModalContainer>
    </S.Container>
  );
}

export default MealsCartModal;
