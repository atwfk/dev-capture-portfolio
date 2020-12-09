import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    * {
        scrollbar-width: thin;
        scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
    }
    *::-webkit-scrollbar {
        width: 10px;
    }
    *::-webkit-scrollbar-track {
        background: #111;
    }
    *::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }
    html {
        @media (max-width: 1700px) {
            font-size: 75%;
        }
    }
    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }
    button {
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #23d997;
            color: #fff;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 3.4rem;
    }
    h3 {
        color: #fff;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    a {
        font-size: 1.1.rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.3rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
