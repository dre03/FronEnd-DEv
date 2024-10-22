import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// CSS RESER, FONT
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
    body {
        font-family: 'Montserrat', sans-serif;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }


    /* Css Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle;