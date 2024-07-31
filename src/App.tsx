import React from 'react';
import {Header} from "./layouts/header/Header";
import styled from "styled-components";
import {Slider} from "./layouts/sections/slider/Slider";

function App() {
    return (
        <Box>
            <Header/>
            <Slider/>
        </Box>
    );
}

const Box = styled.div`
    width: 100%;
`

export default App;
