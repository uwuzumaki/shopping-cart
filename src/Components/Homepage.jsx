import { useState, useEffect } from "react";
import styled from "styled-components";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const Hero = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`;

const HeroImage = styled.img`
  visibility: ${(props) => (props.$active ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: ${(props) => props.index};
  opacity: ${(props) => props.$active};

  transition: visibility 0.5s, opacity 2s ease-in-out;
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
            $active={index === currentImage ? 1 : 0}
          />
        ))}
      </Hero>
    </>
  );
};

export default Homepage;
