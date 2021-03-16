import React, {useState, useRef} from "react"
import styled from "styled-components"
import { device, colors } from "../../styles/constants"
import { Dropdown } from "antd"
import useOutsideClick from "../../hooks/useOutsideClick"

const topVariantsLocation = [
  "Испания, Аликанте","Польша, Варшава","Таиланд, Пхукет","Турция, Аланья","Эстония, Таллин","Венгрия,Будапешт"
]

const topVariantsPrices = [
  {
    textPrice:"до 50 000",
    pricMin:0,
    priceMax:50000,
  },
  {
    textPrice:"50 000 - 100 000",
    pricMin:50000,
    priceMax:100000,
  },
  {
    textPrice:"100 000 - 150 000",
    pricMin:100000,
    priceMax:150000,
  },
  {
    textPrice:"150 000 - 250 000",
    pricMin:150000,
    priceMax:250000,
  },
  {
    textPrice:"более 250 000",
    pricMin:250000,
    priceMax:20000000,
  },
  "до 50 000","50 000 - 100 000","100 000 - 150 000","150 000 - 250 000","более 250 000"
]

const DropdownWrapper = styled.div`
  background: rgba( 255, 255, 255, 0.8 );
  box-shadow: 0 5px 12px 0 rgba( 31, 38, 135, 0.27 );
  backdrop-filter: blur( 13.0px );
  -webkit-backdrop-filter: blur( 13.0px );
  border: 1px solid rgba( 255, 255, 255, 0.8 );
  max-width: 540px;
  padding-top:24px;
  border-radius: 3px;
  color: #4B535F !important;
  z-index:1 !important;
  display:flex;
  flex-direction:column;
`

const VariantsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #F2F4F7;
  padding: 9px 38px 32px !important;
`

const InputsWrapper = styled.div`
  padding-bottom: 20px;
  display:flex;
  align-items:center;
`

const ListItamVariants = styled.li`
    font-family: Lato;
    font-size: 18px;
    line-height: 22px;
    margin-right: 20px;
    border-bottom: 1px solid RGBA(47,59,67,0.7);
    color: #2F3B43;
    opacity: 0.7;
    margin-top: 15px;
    cursor: pointer;
`

const SearchLocation = styled.input`
    max-width:480px;
    font-family: Lato;
    margin:0 auto;
    width: 100%;
    background: #FFFFFF;
    font-size: 18px;
    line-height: 22px;
    color: #2F3B43;
    border: 1px solid RGBA(74,82,94,0.3);
    box-sizing: border-box;
    border-radius: 5px;
    height: 51px;
    padding: 13px 20px;
`

const SearchPrice = styled.input`
    max-width:240px;
    margin:0 auto;
    width: 400%;
    background: #FFFFFF;
    font-size: 18px;
    line-height: 22px;
    color: #2F3B43;
    border: 1px solid RGBA(74,82,94,0.3);
    box-sizing: border-box;
    border-radius: 5px;
    height: 51px;
    padding: 13px 20px;
`


const SubscribeSection = ({
  subhead,
  title,
  text,
  ctaText,
  ctaInfo,
  type,
  ...otherProps
}) => {
  const [visibleLocation,setVisibleLocation] = useState(false)
  const [visiblePrice, setVisiblePrice] = useState(false)
  const [locationProperty, setLocationProperty] = useState("")
  const [priceProperty, setPriceProperty] = useState({
      priceMin:"",
      priceMax:"",
      priceText:"",
  })
  const ref = useRef();
  useOutsideClick(ref, () => {
    setTimeout(() => {
      if (visibleLocation === true) {
        setVisibleLocation(false)
      }
    }, 300);
    setTimeout(() => {
      if (visiblePrice === true) {
        setVisiblePrice(false)
      }
    }, 300);
  });
  const handleLocation = e => {
    e.persist();
    setLocationProperty(e.target.innerText)
    setTimeout(() => {
      setVisibleLocation(false); 
    }, 1000);
  };
  const handlePrice = e => {
    e.persist();
    const priceMin = e.target.dataset.pricemin
    const priceMax = e.target.dataset.pricemax
    const priceText = e.target.innerText
    setPriceProperty(prevState => {
      return { ...prevState, priceMin:priceMin, priceMax:priceMax, priceText:priceText }
    });
    setTimeout(() => {
      setVisiblePrice(false); 
    }, 1000);
  };
  const dropdownPosition = (
    <DropdownWrapper>
      <InputsWrapper>
        <SearchLocation placeholder={locationProperty || "Местоположение"} />
      </InputsWrapper>
       
       <VariantsWrapper>
        {topVariantsLocation.map((variant,index) => {
          return (
            <ListItamVariants  onClick={handleLocation} key={index}>{variant}</ListItamVariants>
          )
        })}
       </VariantsWrapper>
    </DropdownWrapper>
  );
  
  const dropdownPrice = (
    <DropdownWrapper>
      <InputsWrapper>
        <SearchPrice placeholder={priceProperty.priceMin || "Цена от"} />
        <SearchPrice placeholder={priceProperty.priceMax || "Цена до"} />
      </InputsWrapper>
       
      <VariantsWrapper>
        {topVariantsPrices.map((variant,index) => {
          return (
            <ListItamVariants  data-pricemin={variant.pricMin} data-pricemax={variant.priceMax}  onClick={handlePrice} key={index}>{variant.textPrice}</ListItamVariants>
          )
        })}
      </VariantsWrapper>
    </DropdownWrapper>
  );
  
  
  const handleMenuClick = e => {
    e.preventDefault();
    setVisibleLocation(false);
  };

  const handleVisibleChange = flag => {
    if (visiblePrice === true) {
      setVisiblePrice(false)
    }
    setVisibleLocation(true);
  };
  const handleVisiblePrice = flag => {
    if (visibleLocation === true) {
      setVisibleLocation(false)
    }
    setVisiblePrice(true)
    
  }
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
          type={type}
          ref={ref}
        >
          <InputContainer>
            
          <Dropdown 
            trigger={['click']}
            overlay={dropdownPosition} 
            onVisibleChange={handleVisibleChange}
            visible={visibleLocation}
          >
            <StyledButton className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {
                locationProperty || 'Местоположение'
              }
              
            </StyledButton>
          </Dropdown>  
            
          </InputContainer>
          <InputContainer>
            <Dropdown 
              trigger={['click']}
              overlay={dropdownPrice} 
              visible={visiblePrice}
              onVisibleChange={handleVisiblePrice} 
            >
              <StyledButton className="ant-dropdown-link second-input" onClick={e => e.preventDefault()}>
                {
                  priceProperty.priceText || 'Цена'
                }
              </StyledButton>
            </Dropdown>
          </InputContainer>
          {ctaInfo && (
            <ButtonCta onClick={handleMenuClick}>
              <h5>{ctaText}</h5>
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
    z-index:11;
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
    max-width: 800px;
    margin-bottom:32px;
    text-align:left;
    font-family:Lato;
` 

const SubscribeSubHead = styled.h5`
    color: #4364af;
    margin-bottom:16px;
    font-size:16px;
    font-family:Lato;
    font-weight:600;
`

const SubscribeTitle = styled.h2`
    font-size: ${({ type }) => {
      if (type === "small") return "46px"
      if (type === "big") return "54px"
    }};
    line-height: 1.15;
    margin:48px 0;
    font-weight: 500;
    color: #4B535F;
    font-family:Gotham Pro;
    @media ${device.laptopL} {
      font-size: ${({ type }) => {
        if (type === "small") return "42px"
        if (type === "big") return "46px"
      }};
      margin:0 0 24px;
    }
    @media ${device.laptop} {
      font-size: ${({ type }) => {
        if (type === "small") return "32px"
        if (type === "big") return "38px"
      }};
    }
    @media ${device.tablet} {
      font-size: ${({ type }) => {
        if (type === "small") return "24px"
        if (type === "big") return "28px"
      }};
    }
`
const SubscribeFormText = styled.p`
    font-size:18px;
    line-height: 150%;
    letter-spacing:-0.03em;
    margin-bottom:16px;
    color: ${colors.textLight};
    font-weight:400;
    font-family:Lato;
    @media ${device.tablet} {
      font-size:16px;
    }
    @media ${device.mobileL} {
      font-size:15px;
    }
`

const SubscribeForm = styled.form`
    margin:0 auto;
    width:100%;
    background: rgba( 255, 255, 255, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.0px );
    -webkit-backdrop-filter: blur( 13.0px );
    border-radius: 4px;
    border: 1px solid rgba( 255, 255, 255, 0.3 );
    padding:16px;
    position:absolute;
    z-index:10;
    max-width: ${({ type }) => {
      if (type === "small") return "800px"
      if (type === "big") return "800px"
    }};
    display:flex;
    flex-direction:row;
    position:relative;
    .second-input {
      border-left: 2px solid rgba(158, 193, 225, 0.5);
      padding-left:12px;
      @media ${device.tablet} {
        border:none;
        padding:0;
      }
    }
      
    
    @media ${device.tablet} {
      flex-direction:column;
      max-width:320px;
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
    @media ${device.tablet} {
      padding-right:12px;
      margin-bottom:12px;
    }
  
`
const ButtonCta = styled.button`
  height:auto;
  background: linear-gradient(315.87deg, #F34B31 -11.35%, #FFA782 106.98%);
  opacity:.8;
  color: rgb(255, 255, 255);
  border: 0px solid rgb(67, 100, 175);
  width: 100%;
  max-width:140px;
  position:relative;
  right:0px;
  outline:none;
  cursor:pointer;
  padding:13px 20px;
  border-radius: 0px 3px 3px 0px !important;
  transition:all .3s ease-in-out;
  @media ${device.tablet} {
    max-width:100%;
  }
  :hover {
    opacity:1;
  }
  h5 {
    margin-bottom:0;
    font-size:16px;
    line-height:24px;
    color:white;
    font-family:Lato;
    font-weight:500;
  }
`

const StyledButton = styled.button`
    width: 100%;
    border: none;
    font-weight: 500;
    font-size: 16px;
    font-family:Lato;
    line-height: 150%;
    height: 50px;
    color: #2F3B43;
    background: url(/ellipsis.png) no-repeat;  
    background-position: center right;
    text-align:left;
    outline:none;
    max-width: 200px;
    cursor:pointer;
    @media ${device.tablet} {
      max-width:100%;
      height:50px;
    }
`



