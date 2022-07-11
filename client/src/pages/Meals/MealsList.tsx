import styled from "styled-components";
import Container from "../../components/styles/Container";
import MealsListContainer from "../../components/MealsList/MealsListContainer";
import MealsListAddBox from "../../components/MealsList/MealsListAddBox";
import DateNavigation from "../../components/common/DateNavigation";
import Logo from "../../components/common/Logo";
import Navbar from "../../components/common/Navbar";

export default function MealsList() {
    return (
        <Container>
            <Logo />
            <DateNavigation />
            <MealsListContainer />
            <MealsListContainer />
            <MealsListAddBox />
            <Navbar />
        </Container> 
    )
}