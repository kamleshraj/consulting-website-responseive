import React from 'react'
import styled from 'styled-components'
import ButtonTheme from '../components/Button'
import TitleHeader from '../components/TitleHeader'

const Contactus = () => {
  return (
    <Wrapper>
      <TitleHeader>Office Location</TitleHeader>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8839303815166!2d73.81008511436953!3d18.57927087222662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e5a36c61e7%3A0x62058a0c1551da48!2sFamous%20Chowk!5e0!3m2!1sen!2sin!4v1678677509969!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="This is a unique title"></iframe>
      <div className='contact-main'>
      <TitleHeader>Contact us</TitleHeader>
        <div className='container'>
          <form className='contact-form' action='https://formspree.io/f/xlekllww' method='POST'>
            <input type='text' name='username' placeholder='Username'
              autoComplete='off' required/>
            <input type='email' name='email' placeholder='Email'
              autoComplete='off' required/>
            <textarea name='message' cols='30' rows='6' autoComplete='off' placeholder='Message' required />
            {/* <button type='submit'>Submit</button> */}
            <ButtonTheme>Submit</ButtonTheme>
          </form>
        </div>  
      </div>
    </Wrapper>
  )
}
export default Contactus

const Wrapper = styled.section`
.contact-main{
  background-color:${({theme})=>theme.colors.bg};
  padding:50px 0 115px 0;
  .contact-form{
    max-width:400px;
    text-align:center;
    margin:auto;
      input,textarea{
        width:100%;
        padding:1rem;
        margin-bottom:1rem;
        @media (max-width:${({ theme }) => theme.media.mobile}){
          width:90%;
        }
      }
  }
}
`;