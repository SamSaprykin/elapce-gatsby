import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { device } from "../../styles/constants"
/*
  Elapce Content
*/

export const ElapceContent = ({
  children,
  alignContent,
  width,
  marginBottom,
  ...otherProps
}) => {
  return (
    <MainDiv alignContent={alignContent} width={width} {...otherProps}>
      {children}
    </MainDiv>
  )
}

ElapceContent.propTypes = {
  alignContent: PropTypes.string, // 'left', 'center', 'right', 'justify'
  width: PropTypes.string,
}

ElapceContent.defaultProps = {
  alignContent: "left",
  width: "100%",
}

const MainDiv = styled.div`
  font-family: Lato;
  text-align: ${props => props.alignContent};
  width: ${props => props.width};
  max-width: 1070px;
  margin: 0 auto;
  @media ${device.tablet} {
    width:100%;
  }
`

/*
  Elapce title
*/

export const ElapceTitle = ({
  children,
  fontSize,
  color,
  alignContent,
  marginBottom,
  className,
  ...otherProps
}) => {
  return (
    <TitleH2
      fontSize={fontSize}
      color={color}
      alignContent={alignContent}
      marginBottom={marginBottom}
      className={className}
      {...otherProps}
    >
      {children}
    </TitleH2>
  )
}

ElapceTitle.propTypes = {
  fontSize: PropTypes.string, // 'big', 'normal', 'small', '49px', '5em'
  color: PropTypes.string,
  marginBottom: PropTypes.string,
  alignContent: PropTypes.string,
}

ElapceTitle.defaultProps = {
  fontSize: "big",
  color: "#4B535F",
  marginBottom: "24px",
  alignContent: "left",
}

const TitleH2 = styled.h2`
  font-family: Gotham Pro;
  text-align: ${props => props.alignContent};
  font-weight: 500;
  font-size: ${props =>
    props.fontSize === "big"
      ? "48px"
      : props.fontSize === "normal"
      ? "32px"
      : props.fontSize === "small"
      ? "24px"
      : props.fontSize};
  line-height: ${props =>
    props.fontSize === "big"
      ? "57.6px"
      : props.fontSize === "normal"
      ? "32px"
      : props.fontSize === "small"
      ? "28px"
      : props.fontSize};
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
  @media ${device.laptop} {
    font-size: ${props =>
      props.fontSize === "big"
        ? "32px"
        : props.fontSize === "normal"
        ? "32px"
        : props.fontSize === "small"
        ? "24px"
        : props.fontSize};
    line-height: ${props =>
      props.fontSize === "big"
        ? "38.4px"
        : props.fontSize === "normal"
        ? "32px"
        : props.fontSize === "small"
        ? "28px"
        : props.fontSize};
  }
  @media ${device.mobileL} {
    font-size: ${props =>
      props.fontSize === "big"
        ? "30px"
        : props.fontSize === "normal"
        ? "32px"
        : props.fontSize === "small"
        ? "24px"
        : props.fontSize};
    line-height: ${props =>
      props.fontSize === "big"
        ? "36px"
        : props.fontSize === "normal"
        ? "32px"
        : props.fontSize === "small"
        ? "28px"
        : props.fontSize};
  }
`

/*
  Elapce Subhead
*/

export const ElapceSubhead = ({
  children,
  fontSize,
  color,
  marginBottom,
  className,
  ...otherProps
}) => {
  return (
    <Subhead
      fontSize={fontSize}
      color={color}
      marginBottom={marginBottom}
      className={className}
      {...otherProps}
    >
      {children}
    </Subhead>
  )
}

ElapceSubhead.propTypes = {
  fontSize: PropTypes.string, // 'big', 'normal', 'small', '49px', '5em'
  color: PropTypes.string,
  marginBottom: PropTypes.string,
}

ElapceSubhead.defaultProps = {
  fontSize: "normal",
  color: "#222028",
  marginBottom: "32px",
}

const Subhead = styled.h5`
  font-family: Lato;
  display: inline-block;
  font-weight:400;
  font-size: ${props =>
    props.fontSize === "big"
      ? "24px"
      : props.fontSize === "normal"
      ? "16px"
      : props.fontSize === "small"
      ? "12px"
      : props.fontSize};
  line-height: 150%;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
`

/*
  Elapce Text
  
*/

export const ElapceText= ({
  children,
  fontSize,
  color,
  marginTop,
  marginBottom,
  className,
  ...otherProps
}) => {
  return (
    <Text
      fontSize={fontSize}
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
      className={className}
      {...otherProps}
    >
      {children}
    </Text>
  )
}

ElapceText.propTypes = {
  fontSize: PropTypes.string, // 'big', 'normal', 'small', '49px', '5em'
  color: PropTypes.string,
  marginTop: PropTypes.string, // '24px', '0', '3em'
  marginBottom: PropTypes.string,
}

ElapceText.defaultProps = {
  fontSize: "normal",
  color: "black",
  marginTop: "24px",
  marginBottom: "24px",
}

const Text = styled.p`
  font-family: Lato;
  letter-spacing: 0;
  font-size: ${props =>
    props.fontSize === "big"
      ? "22px"
      : props.fontSize === "normal"
      ? "18px"
      : props.fontSize === "small"
      ? "16px"
      : props.fontSize};
  line-height: 150%;
  color: ${props => props.color};
  opacity:.7;
  margin: 0;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  font-weight: 500;
  font-style: normal;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: ${props =>
      props.fontSize === "big"
        ? "22px"
        : props.fontSize === "normal"
        ? "18px"
        : props.fontSize === "small"
        ? "16px"
        : props.fontSize};
  }
  @media (max-width: 576px) {
    font-size: ${props =>
      props.fontSize === "big"
        ? "18px"
        : props.fontSize === "normal"
        ? "15px"
        : props.fontSize === "small"
        ? "13px"
        : props.fontSize};
    
  }
`

/**
 * Using Gatsby-image to output images.
 * If src returns undefined || null || '' return null
 * If src is a gatsby-image render Img
 * If src is statically
 * Gatsby-image does not do error handling.
 * @param src - fluid object returned by graphQL query
 * @param alt - contentful image asset 'title' field
 */
// @TODO: Properly add alt text

export const ElapceImage = ({ src, alt, className, ...otherProps }) => {
  
  if (src?.fluid || src?.childImageSharp?.fluid) {
    return (
      <Img
        fluid={src.fluid || src.childImageSharp.fluid}
        className={className}
        alt={alt ? alt : "Product Illustration"}
      />
    )
  } else if (src?.resize || src) {
    return (
      <StyledImg
        width={otherProps.width}
        height={otherProps.height}
        src={src?.resize?.src || src}
        className={className}
        alt={alt ? alt : "Product Illustration"}
      />
    )
  } else {
    return null
  }
}


const StyledImg = styled.img`
    margin-bottom:0;
    object-fit:contain;
`


