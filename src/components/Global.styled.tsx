import {createGlobalStyle} from "styled-components";
import "../assets/fonts/Archangelsk.eot";
import "../assets/fonts/Archangelsk.ttf";
import "../assets/fonts/Archangelsk.woff";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    body {
        font-family: Archangelsk, sans-serif;
    }
`