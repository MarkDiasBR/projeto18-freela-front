import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #FAFAFA;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
    }

    body.modo-escuro {
        background-color: #111;
    }

    a {
        text-decoration: none;
    }

    ion-icon {
        font-size: 22px;
        color: #262626;
    }

    .tag {
        cursor: pointer;
        color: #00376B;
        font-weight: 400;
    }
`

export default GlobalStyle;