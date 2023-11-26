import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: #09090d;
  border-bottom: 1px solid #3a3940;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    background: unset;
    border-bottom: unset;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 25px;
  @media screen and (max-width: 767px) {
    padding: 20px 20px;
}
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18%;
  @media screen and (max-width: 1380px) {
    width: 250px;
  }
  @media screen and (max-width: 767px) {
    width: 253px;
    
  }
`;
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13.5%;
  @media screen and (max-width: 1380px) {
    width: 200px;
  }
  @media screen and (max-width: 767px) {
    width: unset;
  }
`;
export const ArrowImage = styled.div`
  width: 47px;
  height: 47px;
  background: #3a39404d;
  border-radius: 12px;
  img {
    width: 33px;
    margin: 7px 0px 0px 9px;
    height: auto;
  }
`;
export const TextStyled = styled.div`
  img {
    width: 20px;
    margin: 0px 0px 0 5px;
  }
`;
export const DraftText = styled.p`
  color: #d0cfd1;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
export const MediaText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
export const JanText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: right;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const ProfileTextStyled = styled.div`
  color: #ff7dff;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-decoration: underline;
  text-align: right;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const ProfileImage = styled.div`
  img {
    width: 44px;
    height: auto;
  }
`;
