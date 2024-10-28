import styled from "styled-components";

export const DropDownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropDownButton = styled.button`
  /* Mobile Style | Dimensions: iPhone 12 Pro */
  font-family: "Runescape-Small";
  font-size: 1.2rem;
  background-color: #923232;
  border-color: #5d513d;
  color: white;
  padding: 6px;
  margin-right: 2rem;
  width: 100px;

  /* Tablet Style | Dimensions: iPad Pro */
  @media (min-width: 1024px) {
    font-family: "Runescape-Small";
    font-size: 2rem;
    background-color: #923232;
    border-color: #5d513d;
    color: white;
    padding: 6px;
    margin-right: 2rem;
    width: 175px;
  }

  /* Desktop Style | Dimensions: 1920x1080 */
  @media (min-width: 1920px) {
    font-family: "Runescape-Small";
    font-size: 4rem;
    background-color: #923232;
    border-color: #5d513d;
    color: white;
    padding: 6px;
    margin-right: 2rem;
    width: 275px;
  }
`;

export const DropDownTileSection = styled.button`
  /* Mobile Style | Dimensions: iPhone 12 Pro */
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  padding: 0px;
  margin: 0px;
  border: 0px;
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 450%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* Tablet Style | Dimensions: iPad Pro */
  @media (min-width: 1024px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: absolute;
    z-index: 1;
    width: 175px;
    height: 400%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Desktop Style | Dimensions: 1920x1080 */
  @media (min-width: 1920px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: absolute;
    z-index: 1;
    width: 275px;
    height: 400%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
