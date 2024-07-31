import React from 'react';
import styled from "styled-components";
import {StyledContainer} from "../../components/StyledContainer";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialMenu} from "./socialMenu/SocialMenu";


export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <FlexWrapper justifyContent="space-between" alignItems="center" height="80px">
                    <a href="#"><Icon id="logo" width="296px" height="74px"/></a>
                    <SocialMenu/>
                </FlexWrapper>
            </StyledContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
`



