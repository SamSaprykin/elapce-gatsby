import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device, colors } from "../styles/constants"
import SimpleDropdown from "./menuComponents/simpleDropdown"
import { Container } from "./layoutComponents"
import ElapceButton from "./ElapceButton/ElapceButton"

const tempNavLinks = [
  {
    linkTo:"/objects",
    title:"Каталог",
    type:"simple", 
  },
  {
    linkTo:"/articles",
    title:"Статьи",
    type:"simple-dropdown", 
    submenuItems:[
      {
          titleSubmenu:"Новости",
          descritptionSubmenu:"Ultra high speed connectivity that gives you big access to the datacenter",
          linkTo:"/aboutus",
          linkIcon:"",
         
      },
      {
          titleSubmenu:"Исследования",
          descritptionSubmenu:"No matter the industry, you have a problem we can solve",
          linkTo:"/legal",
          linkIcon:"",
          
      },
      {
        titleSubmenu:"Гид по городам ",
        descritptionSubmenu:"No matter the industry, you have a problem we can solve",
        linkTo:"/legal",
        linkIcon:"",
        
      },
  ]
  },
  {
    linkTo:"/company",
    title:"Компания",
    type:"simple-dropdown", 
    submenuItems:[
      {
          titleSubmenu:"Цель",
          descritptionSubmenu:"Ultra high speed connectivity that gives you big access to the datacenter",
          linkTo:"/aboutus",
          linkIcon:"",
         
      },
      {
          titleSubmenu:"История",
          descritptionSubmenu:"No matter the industry, you have a problem we can solve",
          linkTo:"/legal",
          linkIcon:"",
          
      },
      {
        titleSubmenu:"Команда ",
        descritptionSubmenu:"No matter the industry, you have a problem we can solve",
        linkTo:"/legal",
        linkIcon:"",
        
      },
      {
        titleSubmenu:"В прессе",
        descritptionSubmenu:"No matter the industry, you have a problem we can solve",
        linkTo:"/legal",
        linkIcon:"",
        
      },
  ]
  },
  {
    linkTo:"/pricing",
    title:"Контакты",
    type:"simple", 
  },
]
const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [isScrolled, setScrolled] = useState(false)
    const isBrowser = typeof window !== `undefined`
    const handleScroll = e => {
      let bodyOffset = document.body.getBoundingClientRect()
  
      if (bodyOffset.top < 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    useEffect(() => {
      if (!isBrowser) return null
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    })
    return (
        <StyledUl 
          navbarOpen={navbarOpen} 
          className={
            (isScrolled ? " scroll-header" : "")
          }
        >
          <Container>
            <NavRow>
                <HeaderLogo>
                    <Link to="/">
                        <XperincifyLogo
                          src="/elapce-logo.svg" 
                          width="196"
                          height="40"
                          alt="elapce-logo"
                        />
                    </Link> 
                </HeaderLogo>
                <NavItems navbarOpen={navbarOpen}>
                    <MenuItems>
                    {
                        tempNavLinks.map((itemLink,index) => {
                            return (
                                itemLink.type === 'simple' ? (
                                    <StyledLi key={index} >
                                        <StyledLink 
                                          to={itemLink.linkTo}
                                          activeStyle={{ color: "#5570BA" }}
                                          partiallyActive={true}
                                        >
                                            <span>{itemLink.title}</span>
                                        </StyledLink>
                                    </StyledLi>
                                ) : itemLink.type === "simple-dropdown" && itemLink.submenuItems !== undefined ? (
                                    <SimpleDropdown data={itemLink} key={index}/>
                                ) : (
                                  <></>
                              )
                            )
                        })
                    }
                        
                    </MenuItems>
                    
                </NavItems>
                <MobileNumber href="tel:+380987200220">
                    +380987200220
                </MobileNumber>
                <RightSide>
                    
                    <CtaWrapper>
                          <ElapceButton type="tertiary" toRoute="/" sizeType="big">
                            Отправить заявку
                          </ElapceButton>
                    </CtaWrapper>
                    <Toggle
                        navbarOpen={navbarOpen}
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {navbarOpen ? <Hamburger 
                            open 
                            
                        /> : <Hamburger /> }
                    </Toggle>
                </RightSide>     
              </NavRow>
          </Container>
      </StyledUl>
    )
}

const StyledUl = styled.div`
  list-style-type: none;
  margin: 0;
  display:flex;
  align-items:center;
  width:100%;
  background-color: transparent;
  position:fixed;
  top:0;
  z-index:10000;
  height:100px;
  animation: all .2s ease-in-out;
  
  @media ${device.tablet} {
    padding:1.5rem 0;
    height:80px;
  }

`;


const NavRow = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  @media ${device.tablet} {
    margin-top:8px;
  }
`
const StyledLi = styled.div`
  float: left;
  margin-bottom:0;
  @media ${device.tablet} {
      width:100%;
      padding-bottom:12px;
      border-bottom:1px solid #E4E5F1;
  }
  a {
    display: flex;
    align-items:center;
    justify-content:space-between;
    color:${colors.textMain};
    font-family:Lato;
    font-size:20px;
    line-height:1.1;
    text-align: center;
    padding: 16px 24px;
    text-decoration: none;
    :hover {
      color:#5570BA;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items:center;
  text-decoration: none;
  @media (max-width: 1280px) {
    padding:0 10px;
  }
  @media ${device.laptop} {
    padding:0 8px;
    font-size:13px;
  }
  @media ${device.tablet} {
    width:100%;
    font-size:18px;
    line-height:27px;
    font-weight:500;
    padding-top:12px;
  }
  svg {
      margin:0 8px;
      transition:all .2s ease-in-out;
  }
  &:hover {
    cursor:pointer;
    span {
        opacity:.8;
    }
  }
`;

const HeaderLogo = styled.div`
    width:100%;
    max-width:160px;
    svg {
        width:100%;
        max-width:160px;
    }
    a {
      height:100%;
    }
    @media (max-width: 1280px) {
        max-width:156px;
    }
    @media ${device.laptop} {
        max-width:120px;
    }
    @media ${device.mobileL} {
        a {
            height:40px;
            display:flex;
            align-items:center;
        }
        
    }
`

const XperincifyLogo= styled.img`
    margin-bottom:0;
`
const CtaWrapper = styled.div`
  display:flex;
  width:100%;
  max-width:220px;
  text-align:left;
  position:relative;
  justify-content:center;
  @media ${device.laptop} {
    max-width:220px;
  }
  @media ${device.mobileL} {
    display:none;
    z-index:-1;
  }
`

const NavItems = styled.div`
  margin-left: 2rem;
  @media ${device.tablet} {
    margin-left: 0;
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    background-color: #fff;
    transition: all 0.3s ease-in;
    left: 0;
    top: ${props => (props.navbarOpen ? "0" : "-100%")};
    height: 100%;
    overflow: auto;
  }
`

const Hamburger = styled.div`
  background-color:${colors.textMain};
  width: ${props => (props.open ? "24px" : "16px")};
  margin-left:${props => (props.open ? "0" : "8px")};
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  @media ${device.mobileL} {
    background-color: ${props => (props.open ? "${colors.textMain} !important" : "white")};
  }
  ::before,
  ::after {
    width: 24px;
    height: 2px;
    background-color:${colors.textMain};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    right:0;
    @media ${device.mobileL} {
      width: 22px;
      height: 2px;
      background-color: ${props => (props.open ? "${colors.textMain} !important" : "white")};
    }
  }

  ::before {
    right:0;
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-6px, 0px)" : "rotate(0deg)"};
    top: -6px;
    @media ${device.mobileL} {
      top: -6px;
      transform: ${props =>
        props.open ? "rotate(-90deg) translate(-6px, 0px)" : "rotate(0deg)"};
    }
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 6px;
    @media ${device.mobileL} {
      top: 6px;
      transform: ${props =>
        props.open ? "rotate(-90deg) translate(6px, 0px)" : "rotate(0deg)"};
    }
  }
  @media ${device.mobileL} {
    width: 22px;
    height: 2px;
    margin-right: 16px;
    margin-bottom: 8px;
  }
`

const Toggle = styled.div`
  display:none;
  height: 80px;
  cursor: pointer;
  padding: 0 24px;
  position: relative;
  z-index: 1001;
  
  @media ${device.tablet} {
    display: flex;
    padding: 0 0 0 24px;
    height:40px;
  }
  @media ${device.mobileL} {
    padding: 0;
    margin-right:-8px;
    height:33px;
    div {
      background-color:#3e444e;
      :after {
        background-color:#3e444e;
      }
      :before {
        background-color:#3e444e;
      }
    }
  }
`

const RightSide = styled.div`
  display:flex;
  width:100%;
  max-width:220px;
  justify-content:flex-end;
  @media ${device.laptop} {
    max-width:200px;
  }
  @media ${device.tablet} {
    max-width:260px;
  }
`

const MobileNumber = styled.a`
  list-style-type: none;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 16px;
  margin: 0;
  cursor: pointer;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.1;
  text-decoration: none;
  color: #4B535F;
  @media (max-width:1200px) {
    display:none;
  }
`

const MenuItems = styled.div`
  @media ${device.tablet} {
    padding:110px 40px 60px 40px;
    position:absolute;
    display: block;
    width:100%;
    max-height: 3000px !important;
  }
  @media ${device.mobileL} {
    padding:80px 24px 40px 24px;
  }
`

export default Navigation




