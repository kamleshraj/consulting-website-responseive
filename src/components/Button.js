import React from 'react'
import styled from 'styled-components'

const ButtonTheme = ({children}) => {
  return (
    <ButtonStyled>
      <button className='btn btn-theme'>{children}</button>
    </ButtonStyled>
  )
}
const ButtonStyled = styled.div`

.btn-theme{
  font-weight:300;
  font-size:1.1rem;
  backgournd-color:${({ theme }) => theme.colors.bg};
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1rem 1.3rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  border-radius:.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }
  a{color:${({theme})=>theme.colors.white}}
}
`;

export default ButtonTheme
