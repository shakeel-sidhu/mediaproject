import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 0 32px;
  @media screen and (max-width: 767px) {
    padding: 0 20px;
}
`;
export const HeadingStyled = styled.div`
  margin: 70px 0 50px 0;
  @media screen and (max-width: 767px) {
    margin: 50px 0 20px 0;
  }

  h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: #fff;
    @media screen and (max-width: 767px) {
      font-size: 20px;
      }
  }
  p {
    color: #d0cfd1;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.176px;
  }
`;
export const ContentTypeStyled = styled.div`
  border-top: 1px solid #3a3940;
  h2 {
    margin: 60px 0 0 0;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.396px;
    @media screen and (max-width: 767px) {
      margin: 20px 0 0 0;
      font-size: 16px;
  }
  }
`;
export const SelectorWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  max-width: 686px;
  margin-top: 24px;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    gap: 4px;
    max-width: 342px;
  }
`;
export const SelectorStyled = styled.button`
  border-radius: 30px;
  border: 1px solid #616066;
  padding: 14px 28px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.154px;
  background: transparent;
  cursor: pointer;
  background-color: ${props => props.indexvalue && props.keyvalue === 0 ? "#523FD7" : ""};
  &:focus{
    background-color: #523FD7;
  };
`;
export const TextStyled = styled.p`
color:  #FFF;
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: -0.396px;
margin: 30px 0 10px 0;
@media screen and (max-width: 767px) {
      font-size: 16px;
  }

`;
export const DropDownWrapper = styled.div``;
export const TextNumberStyled = styled.p`
color:  #FFF;
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: -0.396px;
margin: 20px 0 0 0;
@media screen and (max-width: 767px) {
      font-size: 16px;
  }
`;