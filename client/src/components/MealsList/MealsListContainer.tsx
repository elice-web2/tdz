import styled from "styled-components";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MealsListDeleteModal from "./MealsListDeleteModal";
import { faXmark , faSun, faDrumstickBite, faUtensils, faCookieBite } from '@fortawesome/free-solid-svg-icons';

export default function MealsListContainer () {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const clickHandler = () => {
        setOpenModal(true);
    };
    
    const MealsListContainerBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 20px;
    `

    const MealsListBox = styled.div`
        display: flex;  
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        width: 70%;
        height: 150px;
        padding: 10px 30px 10px 80px;

        box-shadow: 2px 2px 6px 0px gray;
        border-radius: 16px;

        background-color: ${({ theme }) => theme.mainColor.lighter};
    `

    const MealContainerIconBox = styled.div`
        display: flex;
        position: absolute;
        justify-content: space-around;
        align-items: center;

        top: 15px;
        left: -10px;

        width: 80px;
        height: 30px;

        border-radius: 5px;
        background-color: #FFCA63;

        p {
            font-size: 12px;
            color: white;
        }
    `

    interface CalorieProps {
        Calorie: number;
    }

    const CalorieInfo = (props:CalorieProps) => {
        const CalorieInfoBox = styled.div`
            display: flex;

            margin-left: 5px;

            .CalorieText {
                margin-right: 20px;

                font-size: 20px;
                font-weight: bold;
            }

            .CalorieAmount {
                font-size: 20px;
            }
        `

        return (
            <CalorieInfoBox>
                <span className="CalorieText">칼로리</span>
                <span className="CalorieAmount">{props.Calorie}Kcal</span>
            </CalorieInfoBox>
        )
    }

    interface FoodsProps {
        Foods: string[];
    }

    const FoodsList = (props:FoodsProps) => {
        const FoodsListContainer = styled.div`
            margin-left: 5px;

            .FoodsList {
                font-size: 14px;
                color: grey;
            }
        `

        return (
            <FoodsListContainer>
                <span className="FoodsList">
                    {props.Foods.map(food => {
                        return food + ', '
                    })} 그 외 {props.Foods.length}개
                </span>
            </FoodsListContainer>
        )
    }

    const NutrientContainer = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
    `

    interface NutrientTypeProps {
        nutrient: string;
        gram: number;
    }

    const NutrientInfo = (props:NutrientTypeProps) => {
        const NutrientInfoBox = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .nutrient {
                width: 90px;
                position: relative;
                margin: 0 5px 5px 5px;
            }

            .circle {
                left: -25px;
                top: 2px;
                display: inline-block;
                width: 10px;
                height: 10px;
                margin: 2px 5px;
                background-color: ${({ color }) => {
                    if (color === '탄수화물') {
                    return 'pink';
                    } else if (color === '단백질') {
                    return '#6ff542';
                    } else {
                    return 'yellow';
                    }
                }};
                border-radius: 50%;
            }

            .gram {
                font-size: 24px;
                font-weight: bold;
            }
        `

        return (
            <>
                <NutrientInfoBox color={props.nutrient}>
                    <div className="nutrient">
                        <span className="circle"></span>
                        {props.nutrient}
                    </div>
                    <div>
                        <span className="gram">{props.gram}</span>g
                    </div>
                </NutrientInfoBox>
            </>
        );
    };

    const NutrientInfoLine = styled.div`
        border-right : thin solid;
        height : 50px;
    `

    const Time = (param:string) => {
        if (param === '아침') {
            return faSun
        } else if (param === '점심') {
            return faDrumstickBite
        } else if (param === '저녁') {
            return faUtensils
        } else {
            return faCookieBite
        }
    }

    const DeleteButton = () => {
        const DeleteButtonBox = styled.div`
            position: absolute;
            top: 20px;
            right: 20px;
        `
        return (
            <DeleteButtonBox onClick={clickHandler} >
                <FontAwesomeIcon icon={faXmark} className="Delete" />
            </DeleteButtonBox>
        )
    }

    return (
        <MealsListContainerBox >
            {openModal && <MealsListDeleteModal setOpenModal={setOpenModal} />}
            <MealsListBox>
                <MealContainerIconBox>
                    <FontAwesomeIcon icon={Time('아침')} className="Breakfast" color="white" />
                    <p>아침</p>
                </MealContainerIconBox>
                <DeleteButton />
                <CalorieInfo Calorie={700} />
                <FoodsList Foods={['신라면','단무지','군만두']} />
                <NutrientContainer>
                    <NutrientInfo nutrient={'탄수화물'} gram={300} />
                    <NutrientInfoLine />
                    <NutrientInfo nutrient={'단백질'} gram={100} />
                    <NutrientInfoLine />
                    <NutrientInfo nutrient={'지방'} gram={200} />
                </NutrientContainer>
            </MealsListBox>
        </MealsListContainerBox>
    )
}