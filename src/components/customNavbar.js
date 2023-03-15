import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const CustomNavbar = () => {
  const Nav = styled.nav`
    .navbar-list{
      display:flex;
      gap:4rem;
      list-style:none;
      .navbar-link{
        text-decoration:none;
        font-size:1.2rem;
        color:${({ theme }) => theme.colors.text};
        &:link,
        &:hover{
          transition:all .5s ease-in;
          color:${({theme})=>theme.colors.helper};
        }
      }
      .active{
        color:${({theme})=>theme.colors.helper}
      }
    }
  `;
  return (
    <Nav>
        <div className='menuIcon'>
            <ul className='navbar-list'>
                <li><NavLink className='navbar-link' to='/'>Home</NavLink></li>
                <li>
                    <NavLink className='navbar-link' to='/services'>Services</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' to='/aboutus'>Aboutus</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' to='/contactus'>Contactus</NavLink>
                </li>
            </ul>
        </div>
    </Nav>
  )
}

export default CustomNavbar
