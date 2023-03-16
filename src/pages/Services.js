import React from 'react'
import styled from 'styled-components'
import TitleHeader from '../components/TitleHeader'
import { useGlobalContext } from '../contextAPI/context'
const Services = () => {
  const { services } = useGlobalContext()
  console.log(services)
  return (
    <>
      <Wrapper className='services-main'>
        <div className='container'>
          <TitleHeader>Our Services</TitleHeader>
          <div className='grid grid-four-card'>
            {services.map((item) => {
              const{title,img,price}=item
              return(
                <div className='card' key={item.id}>
                  <div className='card-body'>
                    <img src={img} alt={title} className='product-img' style={{width:'150px'}}/>  
                    <h3>{title}</h3>
                    <p>{price}</p>
                  </div>
                </div>
              )
            })}
            </div>
          </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
margin-bottom: 100px;
.grid-four-card{
  gap: 1rem;
  .card{
    border: 1px solid rgb(233, 233, 233);
    padding: 1rem;
    text-align: center;
    border-radius: 0.3rem;
  }
}
`;

export default Services
