import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function MealsListAddBox() {
    const navigate = useNavigate();

    const MealsListContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 20px;
    `

    const AddBox = styled.div`
        display: flex;  
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 330px;
        height: 150px;
        padding: 10px 20px;

        border: thin solid black;
        border-radius: 16px;

        
        background-color: ${({ theme }) => theme.mainColor.lighter};

        .GuideInfo {
            font-size: 16px;
        }
    ` 

    return (
        <MealsListContainer>
            <AddBox onClick={()=> navigate("/meals/cart")} >
                <FontAwesomeIcon icon={faCirclePlus} className="AddContainer" />
                <span className="GuideInfo">식단을 추가해주세요</span>
            </AddBox>
        </MealsListContainer>
    )
}