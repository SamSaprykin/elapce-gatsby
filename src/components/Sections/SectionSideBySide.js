import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { SectionLayout } from "./SectionLayout"
import { device } from "../../styles/constants"

export default function SectionSideBySide({
  reversed,
  contentSide,
  imageSide,
  small,
  align,
  justify,
  maxWidth,
  ...otherProps
}) {
  
  return (
    <SectionLayout>
      <SectionRow
        type="flex"
        justify={justify}
        align={align}
        gutter={80}
        small={small}
        reversed={reversed}
      >
        <SectionCol>
          {reversed ? imageSide : contentSide}
        </SectionCol>
        <SectionCol>
          {reversed ? contentSide : imageSide}
        </SectionCol>
      </SectionRow>
    </SectionLayout>
  )
}

SectionSideBySide.propTypes = {
  reversed: PropTypes.bool,
  align: PropTypes.string,
  small: PropTypes.bool,
  justify: PropTypes.string,
  maxWidth: PropTypes.string,
  gutter: PropTypes.string,
}

SectionSideBySide.defaultProps = {
  reversed: false,
  align: "flex-start",
  justify: "space-between",
  maxWidth: "990px",
}

const SectionRow = styled.div`
  margin-left: 0px !important;
  margin-right: 0px !important;
  display:flex;
  justify-content:${props => props.justify};
  align-items:${props => props.align};
  flex-direction:row;
 
  
  @media ${device.tablet} {
    flex-direction:${props =>
      props.reversed === true
        ? "column-reverse"
        : "column"};
  }
`

const SectionCol = styled.div`
  padding-left: 0 !important;
  padding-right: 0 !important;
  width:100%;
  height:auto;
  @media (max-width: 991px) {
    padding-left: 10px !important;
    padding-right: 10px !important;
    padding-bottom: 16px;
  }

  @media (max-width: 576px) {
    padding-bottom: 0;
    width: 100%;
  }
`
