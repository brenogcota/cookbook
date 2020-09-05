import { createGlobalStyle } from 'styled-components';

var fontlight = '#FECCE4';
var fontdark = '#DB664A';
var pinkdark = '#FA8DBB';
var lightorange = '#FF9C85';
var lightgray = '#C4C4C4';
var gray = '#222';

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    html, body, #root {
        min-height: 100%;
        background: #fff;
    }

    body, input, button {
        font-family: Roboto, Helvetica, sans-serif;
        color: ${gray};
    }

    button {
        cursor: pointer;
    }

`;