import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Epilogue','Fraunces', sans-serif;
        box-sizing: border-box;
        scroll-behavior: smooth;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-font-smoothin: antialiased;
        -moz-osx-font-smoothing: grayscaled;
    }

    html {
        box-sizing: border-box;
        --color-white: ${(props) => props.theme.colors.white};
        --color-black: ${(props) => props.theme.colors.black};
        --color-coal: ${(props) => props.theme.colors.coal};
        --color-darkgrey: ${(props) => props.theme.colors.darkgrey};
        --color-grey: ${(props) => props.theme.colors.grey};
        --color-silver: ${(props) => props.theme.colors.silver};
        --color-lightgrey: ${(props) => props.theme.colors.lightgrey};
        --color-purple_prime: ${(props) => props.theme.colors.purple_prime};
        --color-purple_second: ${(props) => props.theme.colors.purple_second};
        --color-red_prime: ${(props) => props.theme.colors.red_prime};
        --color-red_second: ${(props) => props.theme.colors.red_second};
        --color-red_third: ${(props) => props.theme.colors.red_third};
        --color-safe: ${(props) => props.theme.colors.safe};
        --color-danger: ${(props) => props.theme.colors.danger};
    }

    body {
        line-height: 1.6;
    }

    main {
        position: relative;
        display: block;
        margin: 0 auto;
    }

    a, input, textarea,button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
        color: var(--color-grey);
        :focus {
            outline: none;
        }
    } 

    ol, ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, 
    blockquote:after,
    q:before, 
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    p{
        line-height: 1.8;
    }

    ${"" /* Chrome & Safari scrollbar adjustments */}
    :-webkit-scrollbar {
        width: 5px; 
        height: 7px;
    }

    :-webkit-scrollbar-thumb {
        background-color: #1e202a;
        outline: 1px solid #1e202a;
        border-radius: 50px;
    }

    :-webkit-scrollbar-track {
        box-shadow: inset 0 0 4px rgba(0,0,0,0.2);
    }

    ${"" /* Firefox scrollbar adjustment */}
    @-moz-document url-prefix() {
    .scroller {
        scrollbar-width: thin;
        scrollbar-color: #1e202a;
    }
}
`
