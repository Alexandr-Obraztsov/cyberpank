import React from 'react';
import styled from "styled-components";
import {StyledContainer} from "../../components/StyledContainer";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialMenu} from "./socialMenu/SocialMenu";
import background1 from "../../assets/images/background1.webp"
import background2 from "../../assets/images/background2.webp"
import background3 from "../../assets/images/background3.webp"
import {theme} from "../../components/Themes";
import {Link} from "../../components/link/Link";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <FlexWrapper justifyContent="space-between" alignItems="center" height="80px">
                    <a href="#"><Icon id="logo" width="296px" height="74px"/></a>
                    <SocialMenu/>
                </FlexWrapper>
                <FlexWrapper justifyContent="flex-end" alignItems="flex-end" height="calc(100% - 80px)">
                    <Dialog>
                        <FlexWrapper gap="25px" direction="column" alignItems="flex-start">
                            <Text>Доступно на<br/>всех платформах</Text>
                            <Link href="#" type="accent">Узнать больше</Link>
                        </FlexWrapper>
                    </Dialog>
                </FlexWrapper>
            </StyledContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url(${background2});
    background-size: cover;
    background-position: 0 -100px;
    box-shadow: 0 100px 80px -80px rgba(255, 255, 255, 0.76) inset;
`

const Dialog = styled.div`
    padding: 70px;

    color: ${theme.colors.primaryText};
    background-color: ${theme.colors.accent};
    clip-path: polygon(50px 0%, 100% 0%, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0% 100%, 0% 50px);
    user-select: none;
`

const Text = styled.span`
    font-size: 62px;
    line-height: 62px;
    font-family: Archangelsk, sans-serif;
`