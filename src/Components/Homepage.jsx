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

const HeroImage = styled.img`
  grid-column: 1;
  grid-row: 1;

  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 2s ease-in-out;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
`;

const Homepage = () => {
  const images = [hero1, hero2, hero3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((lastImage) => (lastImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Hero>
        {images.map((image, index) => (
          <HeroImage
            key={index}
            src={image}
            $isActive={index === currentImage}
          />
        ))}
      </Hero>
    </>
  );
};

export default Homepage;
