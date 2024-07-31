import styled, {css} from "styled-components";
import {theme} from "../Themes";

type LinkPropsType = {
    type: "accent" | "primary"
}

export const Link = styled.a<LinkPropsType>`
    padding: 19px 50px;
    font-weight: 700;
    font-family: Roboto, sans-serif;
    line-height: 40px;
    font-size: 24px;
    display: inline-block;
    
    ${props => {
        switch (props.type) {
            case "primary":
                return css`background-color: ${theme.colors.accent}; 
                            color: ${theme.colors.primaryText};`;
            case "accent":
                return css`background-color: ${theme.colors.primaryText};
                            color: ${theme.colors.accent};`;
        }
    }}
`