import styled from "styled-components";
import img from "../assets/hero1.jpg";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin: 0;

  background-color: #ebebeb;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 500px;
`;

const MainImage = styled.img`
  width: 75%;
  height: auto;
  flex: 0 1 400px;
`;

const TextWrapper = styled.section`
  flex: 0 1 400px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: left;
  margin: 0rem;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  text-align: left;
  margin: 0;
`;

const Description = styled.p`
  text-align: left;
  font-size: 1rem;
  white-space: pre-wrap;
`;

// Displays a fake owner message
const Owner = () => {
  return (
    <Container>
      <ImageWrapper>
        <MainImage src={img} alt="Image of Michael" />
      </ImageWrapper>

      <TextWrapper>
        <Title>Meet Michael</Title>
        <SubTitle>Fashion Forward Thinking</SubTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{`\n`}
          {`\n`}Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </Description>
      </TextWrapper>
    </Container>
  );
};

export default Owner;
