import styled from "styled-components";

export const TileHeading = styled.p`
  /* Mobile Style | Dimensions: iPhone 12 Pro */
  padding: 1px;
  margin: 0px;
  font-family: "Runescape-Small";
  font-size: 1.1rem;
  color: #5f5445;

  /* Tablet Style | Dimensions: iPad Pro */
  @media (min-width: 1024px) {
    padding: 1px;
    margin: 0px;
    font-size: 1.6rem;
    font-family: "Runescape-Small";
    color: #5f5445;
  }

  /* Desktop Style | Dimensions: 1920x1080 */
  @media (min-width: 1920px) {
    padding: 1px;
    margin: 0px;
    font-size: 2.3rem;
    font-family: "Runescape-Small";
    color: #5f5445;
  }
`;

export const TileContainer = styled.div`
  /* Mobile Style | Dimensions: iPhone 12 Pro */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #5f5445;
  background-color: #000000;
  &:hover {
    background-color: #555650;
    border-color: #000000;
    ${TileHeading} {
      color: #ffff00;
    }
  }
`;

export const TileIcon = styled.img`
  /* Mobile Style | Dimensions: iPhone 12 Pro */
  padding: 1px;
  width: 10px;
  height: 10px;

  /* Tablet Style | Dimensions: iPad Pro */
  @media (min-width: 1024px) {
    padding: 1px;
    width: 20px;
    height: 20px;
  }

  /* Desktop Style | Dimensions: 1920x1080 */
  @media (min-width: 1920px) {
    padding: 1px;
    width: 25px;
    height: 25px;
  }
`;
