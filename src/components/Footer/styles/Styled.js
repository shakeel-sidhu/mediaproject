import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #3a3940;
  background: #09090d;
  @media screen and (max-width: 767px) {
    border-top: unset;
    background: unset;
  }
`;
export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1376px;
  margin: 0 auto;
  padding: 32px 0;
  @media screen and (max-width: 767px) {
    display: block;
    padding: 32px 20px;
  }
`;
export const ButtonBack = styled.div`
  width: 146px;
  padding: 16px 32px;
  color: #fff;
  justify-content: center;
  border-radius: 32px;
  border: 1px solid #3a3940;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const ButtonSearch = styled.div`
  display: flex;
  width: 234px;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px;
  background: #fff;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 20px 0 0 0;
    justify-content: center;
  }
`;
export const TextStyled = styled.div`
  background: linear-gradient(90deg, #523fd7 -20.19%, #ff7dff 168.46%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;
export const ImageStyled = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
