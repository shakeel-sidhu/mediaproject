"use client";
import {
  HeaderStyled,
  TextWrapper,
  ProfileWrapper,
  HeaderWrapper,
  ArrowImage,
  TextStyled,
  ProfileTextStyled,
  ProfileImage,
  MediaText,
  DraftText,
  JanText
} from "./styles/Styled";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderWrapper>
          <TextWrapper>
            <ArrowImage>
              <Image
                src="/images/elements.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </ArrowImage>
            <TextStyled>
              <MediaText>
                Media management
                <Image
                  src="/images/edit.png"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </MediaText>
              <DraftText>Draft campaign</DraftText>
            </TextStyled>
          </TextWrapper>
          <ProfileWrapper>
            <TextStyled>
              <JanText>Jane Cooper</JanText>
              <ProfileTextStyled>Draft campaign</ProfileTextStyled>
            </TextStyled>
            <ProfileImage>
              <Image
                src="/images/profileimg.png"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </ProfileImage>
          </ProfileWrapper>
        </HeaderWrapper>
      </HeaderStyled>
    </>
  );
};

export default Header;
