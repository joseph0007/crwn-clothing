import styled, { css } from "styled-components";

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

const defaultButtonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4267b2;
`;

const currentStyle = (props) => {
  if (props.isGoogleSignIn)
    return defaultButtonStyles + googleSignInButtonStyles;

  return props.inverted ? invertedButtonStyles : defaultButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:focus {
    outline: none;
  }

  ${currentStyle}
`;
