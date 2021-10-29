import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// css`arguments` ====> css(`arguments`)
// const OptionGeneralStyles = css`
//   padding: 10px 15px;
//   font-size: 1.5rem;
//   text-transform: capitalize;
// `;

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-size: 1.5rem;
  text-transform: capitalize;
`;

export const LogoContainer = styled(Link)`
  //   height: 100%;
  //   width: 70px;
  //   padding: 25px;
  align-self: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
