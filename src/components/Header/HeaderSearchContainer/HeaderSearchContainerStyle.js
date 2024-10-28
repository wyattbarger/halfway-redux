import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchBar = styled.input`
  /* Mobile Style | Dimensions: iPhone 12 Pro */
  font-family: "Runescape-Small";
  font-size: 1.2rem;
  color: #2421ee;
  width: 100px;
  background-color: #cfb990;
  border-color: #cfb990;
  line-height: 20px;
  padding: 0.2rem;
  &:focus {
    border-color: #2421ee;
    transition: border-color 0.2s ease-in-out;
    outline: 0;
  }

  /* Tablet Style | Dimensions: iPad Pro */
  @media (min-width: 1024px) {
    font-family: "Runescape-Small";
    font-size: 1.6rem;
    color: #2421ee;
    width: 250px;
    background-color: #cfb990;
    border-color: #cfb990;
    line-height: 30px;
    padding: 0.2rem;
    &:focus {
      border-color: #2421ee;
      transition: border-color 0.2s ease-in-out;
      outline: 0;
    }
  }

  /* Desktop Style | Dimensions: 1920x1080 */
  @media (min-width: 1920px) {
    font-family: "Runescape-Small";
    font-size: 3rem;
    color: #2421ee;
    width: 300px;
    background-color: #cfb990;
    border-color: #cfb990;
    line-height: 50px;
    padding: 0.2rem;
    &:focus {
      border-color: #2421ee;
      transition: border-color 0.2s ease-in-out;
      outline: 0;
    }
  }
`;
