import React from 'react';
import {Header} from "./layouts/header/Header";
import styled from "styled-components";

function App() {
  return (
    <Box>
    <Header/>
    </Box>
  );
}

const Box = styled.div`
    width: 100%;
`

export default App;
