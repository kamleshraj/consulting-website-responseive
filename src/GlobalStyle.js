import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:'border-box';
    font-family: 'Work Sans', sans-serif;
}
html,body{
  overflow-x:hidden
}
h1{
    color:${({ theme }) => theme.colors.heading};
    font-size:3rem;
    font-weight:900
}
p{
    color:${({ theme }) => theme.colors.text};
    opacity:.7;
    font-size:1.1rem;
    line-height:1.5;
    font-weight:300
}
a{ text-decoration: none}
.container {
  max-width: 65rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-card{
  grid-template-columns: repeat(4, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .7fr .7fr ;
   gap:1rem;
}
.common-heading {
    font-size: 2.2rem;
    font-weight: 900;
    text-transform: uppercase;
    padding-bottom: 3.5rem;
    text-align: center;
    position: relative;
    &:after {
      content: "";
      width: 10%;
      height: 1px;
      background: rgb(163, 163, 163);
      position: absolute;
      margin: auto;
      bottom: 40%;
      left: 0;
      right: 0;
    }
}

//mobile
@media (max-width:${({ theme }) => theme.media.mobile}){
  .container{padding:0 1rem}
  .grid-two-column,.grid-three-column, .grid-four-card, .grid-four-column{
    grid-template-columns:repeat(1, 1fr);
    gap:1rem;
  }
}
`;