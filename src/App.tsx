import React from 'react';
import {Header} from "./layouts/header/Header";
import styled from "styled-components";
import {Slider} from "./layouts/sections/slider/Slider";
import {About} from "./layouts/sections/about/About";

function App() {
    return (
        <Box>
            <Header/>
            <Slider/>
            <About/>
        </Box>
    );
}

const Box = styled.div`
    width: 100%;
`

export default App;
