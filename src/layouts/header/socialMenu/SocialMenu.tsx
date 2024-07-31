import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const SocialMenu = () => {
    return (
        <Menu>
            <FlexWrapper gap="40px">
                <MenuItem><a href="#"><Icon width="24px" height="29px" id="youtube"/></a></MenuItem>
                <MenuItem><a href="#"><Icon width="30px" height="30px" id="vk"/></a></MenuItem>
                <MenuItem><a href="#"><Icon width="30px" height="30px" id="facebook"/></a></MenuItem>
                <MenuItem><a href="#"><Icon width="30px" height="30px" id="twitch"/></a></MenuItem>
                <MenuItem><a href="#"><Icon width="30px" height="30px" id="twitter"/></a></MenuItem>
                <MenuItem><a href="#"><Icon width="30px" height="30px" id="instagram"/></a></MenuItem>
            </FlexWrapper>
        </Menu>
    );
};

const Menu = styled.ul`

`

const MenuItem = styled.li`
    
`
