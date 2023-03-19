import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ButtonTheme from './Button'
import { useGlobalContext } from '../contextAPI/context';
const HeroSection = () => {
  const { name, image, authName } = useGlobalContext();
  return (
    <Wrapper>
    <div className='container'>
       <div className='grid grid-two-column'>
            <div className='section-hero-data'>
                  <p className='hero-top-data'>This is me</p>
                  <h1 className='hero-heading'>{name}</h1> 
                  <p className='hero-para'>{authName} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quaerat nemo eum unde harum deleniti illo, in ducimus excepturi minima enim harum quisquam.</p>  
                  <ButtonTheme>
                    <NavLink to="/contactus"> hire me </NavLink>
                  </ButtonTheme>
            </div>
              <div className='section-hero-banner'>
                <img src={image} alt='hero banner' className='hero-banner'/>
            </div>  
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding:3rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:700px;
    .hero-top-data{
      text-transform:uppercase;opacity:.7;
    }
    .hero-heading{text-transform:uppercase;font-size:2.5rem;line-height:1.2;font-weight:900}
    .hero-para{margin-bottom:1.5rem}
  }
  .section-hero-banner{
    justify-self: center;
    img.hero-banner {max-width: 315px;}
  }

  @media (max-width:${({ theme }) => theme.media.mobile}){
  .section-hero-data{
    width:auto;
    text-align:center;
  }
}
`;

export default HeroSection
