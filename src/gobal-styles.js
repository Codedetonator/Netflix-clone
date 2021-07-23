import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
    scrollbar-width: none;  /* Firefox */
}
&::-webkit-scrollbar {
  display: none;
}
a{
  text-decoration: none;
  color:#757575
}
.icon_color{
  padding:1rem;
  fill:#fff;
  color:#fff;
}

.icon_home{
  align-items: center;
  margin-left: -15px;
  margin-right:10px;
}
`

