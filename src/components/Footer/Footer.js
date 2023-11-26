"use client"
import {FooterWrapper, FooterStyled, ButtonBack, ButtonSearch, TextStyled, ImageStyled } from "./styles/Styled"
const Footer = ()=>{

    return(
        <>
          <FooterWrapper>
             <FooterStyled>
                <ButtonBack>
                Back
                </ButtonBack>
                 <ButtonSearch>
                    <TextStyled>
                        Next
                    </TextStyled>
                    <ImageStyled>
                        <img src="/images/arrow.svg" />
                    </ImageStyled>
                </ButtonSearch>
             </FooterStyled>
             
          </FooterWrapper>
        </>
    )

}

export default Footer;