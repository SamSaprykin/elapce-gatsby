import React, { useRef } from 'react';
import styled from "styled-components"
import { ElapceImage } from "../../BlockElements/BlockElements"
import { Container } from "../../layoutComponents"
import { device } from "../../../styles/constants"
import Img from 'gatsby-image'

import Slider from "react-slick"


const settings = {
    autoplay: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2.3,
    slidesToScroll: 2.3,
    speed: 500,
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
    ],
};


const ProjectHeader = ({
  images,
  projectName,
  data,
  ...otherProps
}) => {
  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  }
  const gotoPrev = () => {
      sliderRef.current.slickPrev();
  }
  

  
  return (
      <HeaderWrapper>
        <SLiderWrapper>
            <Slider 
                ref={sliderRef}
                {...settings} 
                className="overflow-hidden"
            >   
            
                {images.map((image,index) => {
                    
                    return (
                        <SlideWrapper className="slide-wrapper" key={index}>
                            <Slide>
                                <Img fluid={image.node.childImageSharp.fluid} />
                            </Slide>
                        </SlideWrapper>
                    )
                })}
            </Slider>
        </SLiderWrapper>
       
        <ButtonsWrapper style={{ textAlign: "center" }}>
            <SlickNext onClick={gotoNext}>
                Next
            </SlickNext>
            <SlickPrev onClick={gotoPrev}>
                Prev
            </SlickPrev>
        </ButtonsWrapper>
      </HeaderWrapper>
  )
}




export default ProjectHeader


const HeaderWrapper = styled.div`
    position:relative;
    img {
        margin-bottom:0; 
    }
    .slick-list {
        padding:0  !important; 
        padding-top: 60px!important;
        padding-bottom: 100px!important;
        @media ${device.tablet} {
            padding:48px 0 !important; 
        }
    }
    .slick-center {
        .slide-wrapper {
            transform:scale(1.25);
            opacity: 1;
            z-index: 1;  
            @media ${device.tablet} {
                transform:scale(1);
            }
        }
    }
`

const SLiderWrapper = styled.div`
    margin:32px 0;
    height:auto;
    
`

const SlideWrapper = styled.div`
    width: 100%;
    display: inline-block;
    position: relative;
    opacity: .6;
    transition:all .4s ease-in-out;
    z-index: 0; 
    transform:scale(.9);
    @media ${device.tablet} {
        transform:scale(1);
    }
`
const Slide = styled.div`
    cursor: pointer;
    width: 100%;
    height:auto;
    background: #fff;
    border-radius: 4px;
    overflow: hidden; 
    outline: none;
    box-shadow: 0 8px 12px rgb(0 22 84 / 15%);
`

const ButtonsWrapper = styled.div`

`

const SlickNext = styled.button`
    position: absolute;
    z-index: 10;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    border: none;
    border-radius: 80px 0 0 80px;
    transform-origin: 100% 0;
    width: 40px;
    height: 80px;
    overflow: hidden;
    right: 0;
    background: hsla(0,0%,100%,.5);
    color: transparent;
    outline: none;
    transition:all .2s ease-in-out;
    ::before {
        content: '';
        position: absolute;
        left: 20px;
        top: 50%;
        display: block;
        border-right: 2px solid #3c3956;
        border-bottom: 2px solid #3c3956;
        width: 12px;
        height: 12px;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    :hover {
        background:white;
        transform:scale(1.2) translateY(-50%);
    }
`



const SlickPrev = styled.button`
    position: absolute;
    z-index: 10;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    border: none;
    width: 40px;
    height: 80px;
    overflow: hidden;
    border-radius: 0 80px 80px 0;
    transform-origin: 0 0;
    left:0;
    background: hsla(0,0%,100%,.5);
    color: transparent;
    outline: none;
    transition:all .2s ease-in-out;
    ::before {
        content: '';
        position: absolute;
        right: 20px;
        top: 50%;
        display: block;
        border-left: 2px solid #3c3956;
        border-top: 2px solid #3c3956;
        width: 12px;
        height: 12px;
        float: right;
        transform: translate(50%, -50%) rotate(-45deg);
    }
    :hover {
        background:white;
        transform:scale(1.2) translateY(-50%);
    }
`







