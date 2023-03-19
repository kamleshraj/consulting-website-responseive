import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars,FaRegWindowClose } from "react-icons/fa";


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

    .mobile-navbar-menu{
      display:none
    }
    .mobile-navbar-menu[name='menu-outline']{display:none}
    @media (max-width:${({ theme }) => theme.media.mobile}){
      .mobile-navbar-menu{
        display: block;
        position: absolute;
        right: 1rem;
        top: 1rem;
        z-index:11;
      }
      .mobile-navbar-menu[name='menu-outline']{display:inline-block}
      .mobile-navbar-menu .close-icon{display:none}

      .navbar-list{
        transition: all 1s ease-out;
        transform: translateX(100%);
        background: #fff;
      }
      .menuIcon.active{
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        background: red;
        z-index: 111;
        top: 0%;
        over-flow:hidden
      }
      .menuIcon.active .navbar-list{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        min-height: 100vh;
        transform:translateX(0%);
        transition: all 1s ease-out;
        .navbar-link{
          font-size:2.8rem;
        }
      }
      .menuIcon.active .mobile-navbar-menu .close-icon{display:inline-block}
      .menuIcon.active .mobile-navbar-menu .menu-icon{display:none}
    }
  `;
  const[isOpen,setIsOpen]=useState(false)
  const openMenu = () => {
    setIsOpen(true)
  }
  return (
    <Nav>
      <div className={isOpen ? 'menuIcon active' : 'menuIcon'}>
          <ul className='navbar-list'>
              <li><NavLink className='navbar-link' to='/' onClick={() => setIsOpen(false)}>Home</NavLink></li>
              <li>
                  <NavLink className='navbar-link' to='/services' onClick={() => setIsOpen(false)}>Services</NavLink>
              </li>
              <li>
                  <NavLink className='navbar-link' to='/aboutus' onClick={() => setIsOpen(false)}>Aboutus</NavLink>
              </li>
              <li>
                  <NavLink className='navbar-link' to='/contactus' onClick={() => setIsOpen(false)}>Contactus</NavLink>
              </li>
          </ul>
            <div className='mobile-navbar-menu'>
              <FaBars name='menu-outline' className='nav-mobile-icon menu-icon' onClick={openMenu} />
              <FaRegWindowClose name='menu-outline' className='nav-mobile-icon close-icon' onClick={() => setIsOpen(false)}/>
            </div>
      </div>
    </Nav>
  )
}

export default CustomNavbar
