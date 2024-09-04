import { useState, useEffect } from "react";
import styled from "styled-components";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const Hero = styled.div`
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

//Photo by <a href="https://unsplash.com/@brookecagle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brooke Cagle</a> on <a href="https://unsplash.com/photos/woman-wearing-red-long-sleeved-shirt-standing-near-white-painted-wall-z1B9f48F5dc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//Photo by <a href="https://unsplash.com/@sadswim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ian dooley</a> on <a href="https://unsplash.com/photos/woman-standing-near-pink-concrete-wall-during-daytime-TT-ROxWj9nA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//Photo by <a href="https://unsplash.com/@nordwood?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">NordWood Themes</a> on <a href="https://unsplash.com/photos/pair-of-brown-leather-boots-beside-bet-Nv4QHkTVEaI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

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
  color: #4b72df;
`;

const image1 = {
  pageLink: "https://unsplash.com/@brookecagle",
  photographer: "Brooke Cagle",
  imageLink:
    "https://unsplash.com/photos/woman-wearing-red-long-sleeved-shirt-standing-near-white-painted-wall-z1B9f48F5dc",
  image: hero1,
};

const image2 = {
  pageLink: "https://unsplash.com/@sadswim",
  photographer: "ian dooley",
  imageLink:
    "https://unsplash.com/photos/woman-standing-near-pink-concrete-wall-during-daytime-TT-ROxWj9nA",
  image: hero2,
};

const image3 = {
  pageLink: "https://unsplash.com/@nordwood",
  photographer: "NordWood Themes",
  imageLink:
    "https://unsplash.com/photos/pair-of-brown-leather-boots-beside-bet-Nv4QHkTVEaI",
  image: hero3,
};

const Homepage = () => {
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
      <Hero>
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
              $isActive={index === currentImage}
            />
          </HeroImageWrapper>
        ))}
      </Hero>
    </>
  );
};

export default Homepage;
