import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: white;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorSubtext = styled.div``;

const BackLink = styled(Link)`
  color: black;
`;

const ErrorTitle = styled.h1``;

// Displays an error page for anything not in the route. Has links leading back to home.
const Error = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>There&apos;s nothing here!</ErrorTitle>
      <ErrorSubtext>
        <BackLink to="/">Click here to go back to the main page.</BackLink>
      </ErrorSubtext>
    </ErrorContainer>
  );
};

export default Error;
