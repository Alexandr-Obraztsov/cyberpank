import styled from "styled-components";


type StyledContainerPropsType = {
    withoutPadding?: boolean
}

export const StyledContainer = styled.div<StyledContainerPropsType>`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    margin: 0 auto;
    ${props => props.withoutPadding ? "" : `padding: 70px 0px;`}
    border: 1px solid red;
`