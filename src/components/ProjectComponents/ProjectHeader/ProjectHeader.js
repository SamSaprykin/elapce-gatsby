import React, { useRef } from 'react';
import styled from "styled-components"
import { Container } from "../../layoutComponents"
import { device } from "../../../styles/constants"
import Img from 'gatsby-image'

import Slider from "react-slick"
import {
    FacebookIcon,
    TwitterIcon,
} from "react-share";
import {
    TwitterShareButton,
    FacebookShareButton,
} from "react-share";

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
  location,
  ...otherProps
}) => {
  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  }
  const gotoPrev = () => {
      sliderRef.current.slickPrev();
  }
  const shareUrl = `https://www.elapce.com`

  
  return (
      <HeaderWrapper>
        <Container>
            <HeaderInfo>
                <ProjectName>{projectName}</ProjectName>
                <ShareLinks>
                    <IconsWrapper>
                    <FacebookShareButton url={shareUrl}>
                        <FacebookIcon size={40} round={true}></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl}>
                        <TwitterIcon size={40} round={true}></TwitterIcon>
                    </TwitterShareButton>
                    </IconsWrapper>
                </ShareLinks>
            </HeaderInfo>
           
        </Container>
       
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
                                <Img fluid={image.fluid} />
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
            padding:12px 0 !important; 
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
 button {
    position: absolute;
    z-index: 10;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    border: none;
    width: 40px;
    height: 80px;
    border: none;
    transform-origin: 0 0;
    overflow: hidden;
    background: hsla(0,0%,100%,.5);
    color: transparent;
    outline: none;
    transition:all .2s ease-in-out;
    @media ${device.tablet} {
        top: 60%;
    }
    ::before {
        content: '';
        position: absolute;
        top: 50%;
        display: block;
        width: 12px;
        height: 12px;
    }
    :hover {
        background:white;
        transform:scale(1.2) translateY(-50%);
    }
 }
`

const SlickNext = styled.button`
    border-radius: 80px 0 0 80px;
    right: 0;
    ::before {
        left: 20px;
        border-right: 2px solid #3c3956;
        border-bottom: 2px solid #3c3956;
        transform: translate(-50%, -50%) rotate(-45deg);
    }

`



const SlickPrev = styled.button`
    border-radius: 0 80px 80px 0;
    left:0;
    ::before {
        right: 20px;
        border-left: 2px solid #3c3956;
        border-top: 2px solid #3c3956;
        float: right;
        transform: translate(50%, -50%) rotate(-45deg);
    }
`

const ProjectName = styled.h2`
    color:#4B535F;
    font-family: Gotham Pro;
    margin-top:24px;
    font-size:58px;
    line-height:1.05;
    margin-bottom:0;
    @media ${device.tablet} {
        font-size:42px;
        margin:0;
    }
    @media ${device.mobileL} {
        font-size:28px;
    }
`



const ShareLinks = styled.div`
  max-width:220px;
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  button {
    outline:none;
  }
  @media ${device.tablet} {
    max-width:120px;
    padding: 0 16px;
    margin:0.8em auto;
    svg {
      width:32px;
      height:32px;
    }
  }
`

const IconsWrapper = styled.div`
  width:100%;
  max-width:100px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`

const HeaderInfo = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`



