import React from 'react';
import styled from "styled-components";
import {StyledContainer} from "../../../components/StyledContainer";
import {PrimaryText} from "../../../components/PrimaryText";
import {SecondaryText} from "../../../components/SecondaryText";
import {HighlightedText} from "../../../components/HighlightedText";
import background1 from "../../../assets/images/background1.webp"
import background2 from "../../../assets/images/background2.webp"
import background3 from "../../../assets/images/background3.webp"

export const About = () => {
    return (
        <StyledAbout>
            <StyledContainer>
                <PrimaryText>Найт-Сити изменит тебя навсегда!</PrimaryText>
                <StyledSecondaryText><HighlightedText>Cyberpunk 2077</HighlightedText> — приключенческая ролевая игра, действие которой происходит в
                    мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V,
                    наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты,
                    навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета
                    и всё, что тебя окружает.
                </StyledSecondaryText>
                <Grid>
                    <Image src={background1}/>
                    <Image src={background2}/>
                    <Image src={background3}/>
                </Grid>
            </StyledContainer>
        </StyledAbout>
    );
};


const StyledAbout = styled.section`
    padding-bottom: 140px;
`


const StyledSecondaryText = styled(SecondaryText)`
    max-width: 950px;
`

const Grid = styled.div`
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
`

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    clip-path: polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 100%, 0 50px);
    object-position: 0 -100px;
    
    &:nth-child(2){
        grid-row: 1 / 3;
        grid-column: 2;
        height: 430px;
        object-position: center;
    }
`