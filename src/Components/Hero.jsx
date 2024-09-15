import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const HeroDiv = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  grid-column: 1;
  grid-row: 1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  text-align: left;
  margin-bottom: 1rem;
  color: #f8f8f8;
  z-index: 10;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const HeroSub = styled.h2`
  font-size: 2.5rem;
  color: #f8f8f8;
  margin-top: 1rem;
  z-index: 10;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const HeroTitleLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: white;
  }
`;

const HeroImage = styled.img`
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 2s ease-in-out;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};

  user-select: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const HeroTextWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  margin-left: 10%;
  margin-bottom: 20%;

  z-index: 9;
  justify-self: start;
  align-self: center;
  transition: none;
`;

const HeroCredit = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 1.1rem;
  color: #0000008b;
  background-color: #52525214;
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  align-self: end;
  z-index: 3;
  transition: visibility 2s ease-in-out, opacity 2s ease-in-out;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
`;

const HeroLink = styled.a`
  color: #000000;
`;

const image1 = {
  pageLink: "https://unsplash.com/@von_co",
  photographer: "Ivana Cajina",
  alt: "Man leaning on brown wall",
  imageLink:
    "https://unsplash.com/photos/man-leaning-on-brown-wall-_7LbC5J-jw4",
  image: hero1,
};

const image2 = {
  pageLink: "https://unsplash.com/@sadswim",
  photographer: "ian dooley",
  alt: "Woman standing near pink wall",
  imageLink:
    "https://unsplash.com/photos/woman-standing-near-pink-concrete-wall-during-daytime-TT-ROxWj9nA",
  image: hero2,
};

const image3 = {
  pageLink: "https://unsplash.com/@dayinmydreams",
  photographer: "Kristina Petrick",
  alt: "Woman sitting on a pathway",
  imageLink:
    "https://unsplash.com/photos/woman-sitting-on-pathway-during-daytime-qmyebfKk3pw",
  image: hero3,
};

const Hero = () => {
  const links = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((lastImage) => (lastImage + 1) % links.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [links.length]);

  return (
    <>
      <HeroDiv>
        {links.map((link, index) => (
          <HeroImageWrapper key={"container" + index}>
            <HeroCredit key={"text" + index} $isActive={index === currentImage}>
              Photo by{" "}
              <HeroLink
                href={link.pageLink}
                target="
              _blank"
              >
                {link.photographer}
              </HeroLink>{" "}
              on{" "}
              <HeroLink href={link.imageLink} target="_blank">
                Unsplash
              </HeroLink>
            </HeroCredit>
            <HeroImage
              key={index}
              src={link.image}
              alt={link.alt}
              $isActive={index === currentImage}
            />
          </HeroImageWrapper>
        ))}
        <HeroTextWrapper>
          <HeroTitleLink to="shop">
            <HeroTitle>Style Haven</HeroTitle>
            <HeroSub>Where Fashion Meets You</HeroSub>
          </HeroTitleLink>
        </HeroTextWrapper>
      </HeroDiv>
    </>
  );
};

export default Hero;
