"use client";
import { useEffect, useState } from "react";
import Dropdown from "../components/UI/Form/Dropdown/Dropdown";
import {
  HomeWrapper,
  HeadingStyled,
  ContentTypeStyled,
  SelectorWrapperStyled,
  SelectorStyled,
  TextStyled,
  DropDownWrapper,
  TextNumberStyled,
} from "./styles/Styled";
import Rangeslider from "../components/UI/Form/Rangeslider/Rangeslider";

const Home = () => {
  const [values, setValue] = useState("");
  const [indexval, setIndexValue] = useState(true)
  const selectorStyled = [
    "Fun",
    "Education",
    "Sports",
    "News",
    "Investment",
    "Facts",
  ];
  const funDropdown = [
    { id: 0, label: "Board games revival" },
    { id: 1, label: "Comedy trends" },
    { id: 2, label: "Amusement parks" },
    { id: 3, label: "Escape rooms" },
    { id: 4, label: "Street performances" },
    { id: 5, label: "Online challenges" },
    { id: 6, label: "Festivals impact" },
    { id: 7, label: "Crafting movement" },
  ];
  const funEducation = [
    { id: 0, label: "Gamified learning" },
    { id: 1, label: "Education systems" },
    { id: 2, label: "Bilingual benefits" },
    { id: 3, label: "Standardised testing" },
    { id: 4, label: "Arts in schools" },
    { id: 5, label: "Tech bootcamps" },
    { id: 6, label: "Homeschooling dynamics" },
    { id: 7, label: "Mentorship importance" },
  ];

  const sportsEducation = [
    { id: 0, label: "Sports medicine" },
    { id: 1, label: "Team sociology" },
    { id: 2, label: "Olympic economics" },
    { id: 3, label: "Gender parity" },
    { id: 4, label: "Fandom psychology" },
    { id: 5, label: "Extreme sports" },
    { id: 6, label: "Sports business" },
    { id: 7, label: "Youth athletics" },
  ];

  const newsEducation = [
    { id: 0, label: "Citizen journalism" },
    { id: 1, label: "Whistleblower influence" },
    { id: 2, label: "Fake news" },
    { id: 3, label: "Print media survival" },
    { id: 4, label: "Social media news" },
    { id: 5, label: "Cybersecurity news" },
    { id: 6, label: "Democratic media" },
    { id: 7, label: "News deserts" },
  ];

  const investmentEducation = [
    { id: 0, label: "Robo-advising" },
    { id: 1, label: "Geopolitical impacts" },
    { id: 2, label: "Index funds" },
    { id: 3, label: "Real estate trends" },
    { id: 4, label: "Startup investing" },
    { id: 5, label: "Social trading" },
    { id: 6, label: "Tax strategies" },
    { id: 7, label: "Emerging markets" },
  ];

  const factsEducation = [
    { id: 0, label: "Animal oddities" },
    { id: 1, label: "Everyday science" },
    { id: 2, label: "Historical obscurities" },
    { id: 3, label: "Science myths" },
    { id: 4, label: "Human body facts" },
    { id: 5, label: "Oceanic discoveries" },
    { id: 6, label: "Space exploration" },
    { id: 7, label: "Ancient tech" },
  ];
  const [dropdownValue, setDrodownValue] = useState(funDropdown);
  const handleClick = (e) => {
    const value = e.target.outerText;
    setValue(value);
    if(value !== "Fun"){
      setIndexValue(false);
    }
    if (value === "Fun") {
      setDrodownValue(funDropdown);
    } else if (value === "Education") {
      setDrodownValue(funEducation);
    } else if (value === "Sports") {
      setDrodownValue(sportsEducation);
    } else if (value === "News") {
      setDrodownValue(newsEducation);
    } else if (value === "Investment") {
      setDrodownValue(investmentEducation);
    } else if (value === "Facts") {
      setDrodownValue(factsEducation);
    }
  };
  useEffect(() => {
    setValue("Fun");
  }, []);

  return (
    <>
      <HomeWrapper>
        <HeadingStyled>
          <h2>Content type</h2>
          <p>Choose a content type that best fits your needs.</p>
        </HeadingStyled>
        <ContentTypeStyled>
          <h2>What type of content are you creating?</h2>
          <SelectorWrapperStyled>
            {selectorStyled.map((value, i) => {
              // useIndex(i)
              return (
                <div key={i}>
                  <SelectorStyled indexvalue={indexval} keyvalue={i} value={values} onClick={handleClick}>
                    {value}
                  </SelectorStyled>
                </div>
              );
            })}
          </SelectorWrapperStyled>
          <TextStyled>
            Which type of “{values}” content do you want to create?
          </TextStyled>
          <DropDownWrapper>
            <Dropdown dropdownData={dropdownValue} />
          </DropDownWrapper>
          <TextNumberStyled>
            Set the number of words for output text.
          </TextNumberStyled>
          <Rangeslider />
        </ContentTypeStyled>
      </HomeWrapper>
    </>
  );
};

export default Home;
