import styled from "styled-components";

export const HeaderTitleStyle = styled.h1`
  /* Mobile Style | Dimensions: iPhone 12 Pro */
  font-size: 2rem;
  font-family: "Runescape-Bold";
  color: #ffff00;
  padding: 0.5rem;
  margin: 1rem;

  /* Tablet Style | Dimensions: iPad Pro */
  @media (min-width: 1024px) {
    font-size: 5rem;
    padding: 0.75rem;
    margin: 1.25rem;
  }

  /* Desktop Style | Dimensions: 1920x1080 */
  @media (min-width: 1920px) {
    font-size: 7rem;
    padding: 1rem;
    margin: 2rem;
  }
`;
