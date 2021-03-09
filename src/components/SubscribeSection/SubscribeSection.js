import React from "react"
import styled from "styled-components"
import { device, colors } from "../../styles/constants"

const SubscribeSection = ({
  subhead,
  title,
  text,
  ctaText,
  ctaInfo,
  type,
  ...otherProps
}) => {
  return (
    <SubscribeWrapper type={type}>
        <FormInfo>
          {subhead && (
            <SubscribeSubHead>
              {subhead}
            </SubscribeSubHead>
          )}
          {title && (
            <SubscribeTitle type={type}>
              {title}
            </SubscribeTitle>
          )}
          {text && (
            <SubscribeFormText dangerouslySetInnerHTML={{ __html:  text }} />
          )}
         
        </FormInfo>
        
        <SubscribeForm 
          method="post"
          action="https://app.campaignrefinery.com/subscribe/form/id/ed3918a3-1971-440d-92d8-c4883ae72b19"
          id="1136__cr_form"
          type={type}
        >
          <InputContainer>
            <StyledInput 
              placeholder="Местоположение" 
              type="email" 
              name="email"
              id="email" 
            />
            
            
          </InputContainer>
          <InputContainer>
            <StyledInput 
              placeholder="Цена" 
              type="email" 
              name="email"
              id="email" 
            />
          </InputContainer>
          {ctaInfo && (
            <ButtonCta type="submit" >
              <h5>{ctaText}</h5>
              <span>{ctaInfo}</span>
            </ButtonCta>
          )}
        </SubscribeForm>
    </SubscribeWrapper>
    
    
  )
}
  
export default SubscribeSection


const SubscribeWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:0 0 32px;
    position:relative;
    border-top: ${({ type }) => {
      if (type === "small") return "1px solid #f2f3f5"
      if (type === "big") return ""
    }};
    margin-bottom: ${({ type }) => {
      if (type === "small") return "64px"
      if (type === "big") return ""
    }};
    @media ${device.tablet} {
      padding:0 0 32px;
      align-items:flex-start;
    }
    @media ${device.mobileL} {
      margin-bottom: ${({ type }) => {
        if (type === "small") return "16px"
        if (type === "big") return ""
      }};
    }
    
`

const FormInfo = styled.div`
    width:100%;
    max-width:680px;
    margin-bottom:32px;
    text-align:left;
    font-family:Inter,system-ui,sans-serif;
` 

const SubscribeSubHead = styled.h5`
    color: #4364af;
    margin-bottom:16px;
    font-size:16px;
    font-family:Inter,system-ui,sans-serif;
    font-weight:600;
`

const SubscribeTitle = styled.h2`
    font-size: ${({ type }) => {
      if (type === "small") return "42px"
      if (type === "big") return "48px"
    }};
    line-height: 1.1;
    margin-bottom:24px;
    font-weight: 500;
    color: #4B535F;
    font-family:Inter,system-ui,sans-serif;
    @media ${device.laptop} {
      font-size: ${({ type }) => {
        if (type === "small") return "32px"
        if (type === "big") return "38px"
      }};
    }
`
const SubscribeFormText = styled.p`
    font-size:20px;
    line-height:28px;
    margin-bottom:16px;
    color: ${colors.textLight};
    font-weight:400;
    font-family:Inter,system-ui,sans-serif;
    
    @media ${device.tablet} {
      font-size:16px;
      line-height:24px;
    }
    @media ${device.mobileL} {
      font-size:15px;
      line-height:20px;
    }
`

const SubscribeForm = styled.form`
    margin:0 auto;
    width:100%;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.0px );
    -webkit-backdrop-filter: blur( 13.0px );
    border-radius: 4px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding:32px;
    position:absolute;
    z-index:10;
    max-width: ${({ type }) => {
      if (type === "small") return "500px"
      if (type === "big") return "600px"
    }};
    display:flex;
    flex-direction:column;
    position:relative;
    
    @media ${device.tablet} {
      max-width:400px;
      margin:0;
      background: rgba( 255, 255, 255, 0.35 );
      border: 1px solid rgba( 255, 255, 255, 0.35 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.50 );
    }
`

const InputContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    height:auto;
    position:relative;
    height:46px;
    margin-bottom:16px;
    button {
        height:46px;
        font-family: sans-serif;
        line-height: 1.3em;
        letter-spacing:0.1px;
        font-size:16px;
        background: rgb(67, 100, 175);
        color: rgb(255, 255, 255);
        border: 0px solid rgb(67, 100, 175);
        width: 100%;
        max-width:101px;
        position:relative;
        right:0px;
        outline:none;
        cursor:pointer;
        padding-left: 10px !important;
        padding-right: 10px !important;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
        border-radius: 0px 3px 3px 0px !important;
    }
    @media ${device.mobileL} {
        height:70px;
    }
`
const ButtonCta = styled.button`
  height:auto;
  background: linear-gradient(315.87deg, #F34B31 -11.35%, #FFA782 106.98%);
  opacity:.8;
  color: rgb(255, 255, 255);
  border: 0px solid rgb(67, 100, 175);
  width: 100%;
  position:relative;
  right:0px;
  outline:none;
  cursor:pointer;
  padding:13px 20px;
  border-radius: 0px 3px 3px 0px !important;
  margin-top:8px;
  transition:all .3s ease-in-out;
  :hover {
    opacity:1;
  }
  h5 {
    margin-bottom:0;
    font-size:20px;
    line-height:24px;
    color:white;
    font-family:Inter,system-ui,sans-serif;
    font-weight:500;
  }
  span {
    margin-bottom:0;
    font-size:11px;
    color:white;
    font-family:Inter,system-ui,sans-serif;
    font-weight:300;
  }
`

const StyledInput = styled.input`
    margin-bottom: 16px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #3e444e;
    font-weight: 500;
    font-size: 18px;
    font-family:Inter,system-ui,sans-serif;
    line-height: 20px;
    background-position: center right;
    min-height: 52px;
    color: #2F3B43;
    background: url(../images/ellipsis.png) no-repeat;  
    outline:none;
`