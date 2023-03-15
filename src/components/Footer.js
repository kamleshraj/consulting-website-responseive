import React from 'react'
import { NavLink } from 'react-router-dom';
import ButtonTheme from './Button'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className='footer-modal'>
          <div className='grid grid-two-column'>
            <div className=''>
              <p>Ready to get started?</p>
              <p>Talk to us today</p>
            </div>
            <div>
              <ButtonTheme><NavLink to='/services'>Get Started</NavLink></ButtonTheme>
            </div>
          </div>
        </div>
        
        <footer>
          <div className='container grid grid-four-column'>
            <div className="footer-about foot-item">
              <h6>Thapa Technical</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="footer-subscribe foot-item">
            <h6>Subscribe to get important updates</h6>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-social foot-item">
            <h6>Follows Us</h6>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact foot-item">
            <h6>Call Us</h6>
            <h3>+91 12345678978</h3>
            </div>
          </div>
          {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
          </div>
        </footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
 background-color:${({ theme }) => theme.colors.black};
 position: relative;
padding: 5rem 0 0 0;
color: ${({theme})=>theme.colors.white};
 .footer-modal {
    max-width: 850px;
    background-color: rgb(249, 249, 255);
    box-shadow: rgba(78, 78, 78, 0.69) 0px 6px 20px;
    padding: 15px;
    margin: auto;
    border-radius: 0.4rem;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    top: -40px;
}
.foot-item{
  h6{font-size:1.1rem;padding-bottom:1rem}
  padding:2.5rem 0;
  p{color:${({ theme }) => theme.colors.white};font-size:.9rem}
  .footer-social--icons{display:flex;
    .icons{margin-right:.5rem}
    a{color:${({ theme }) => theme.colors.white};}
  }
input,button{padding:1rem}
}


`;
export default Footer
