import React from 'react';
import styled from "styled-components";
import {StyledContainer} from "../../components/StyledContainer";
import Icon from "../../components/icon/Icon";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <Icon id="vk"/>
            </StyledContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    height: 80px;
    width: 100%;
    border: 1px solid red;
`