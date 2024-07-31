import styled from "styled-components";

type FlexWrapperPropsType = {
    alignItems: string,
    justifyContent: string,
    gap: string,
    direction: string,
    wrap: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    align-items: ${(props: FlexWrapperPropsType) => props.alignItems};
    justify-content: ${(props: FlexWrapperPropsType) => props.justifyContent};
    gap: ${(props: FlexWrapperPropsType) => props.gap};
    flex-direction: ${(props: FlexWrapperPropsType) => props.direction};
    flex-wrap: ${(props: FlexWrapperPropsType) => props.wrap};
`