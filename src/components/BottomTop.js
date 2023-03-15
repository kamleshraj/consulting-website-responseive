import React, { useEffect, useState } from 'react'
import { BsArrowUp } from "react-icons/bs";
import styled from 'styled-components';

const BottomTop = () => {
    const[isVisible,setIsVisible]=useState(false)
    const goToTop = () => {
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
    const listenToScroll = () => {
        let heightTohidden = 250;
        const winScrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScrollPosition > heightTohidden) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return ()=>window.removeEventListener('scroll',listenToScroll)
    },[])
  return (
    <Wrapper>
    {isVisible && (
        <div className='btn-top'>
          <button onClick={goToTop}>
              <BsArrowUp/>
          </button>
        </div >
    )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .btn-top{
        position:fixed;
        bottom:1rem;
        right:1rem;
        button {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            cursor: pointer;
            border: 1px solid rgb(233, 233, 233);
            transition: all 0.5s ease-in 0s;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;

export default BottomTop
