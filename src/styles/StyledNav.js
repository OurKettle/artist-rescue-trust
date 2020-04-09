import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import { blueGradient, pinkGradient } from "./Mixins"

export const StyledNav = styled.nav`
  display: none;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 1rem;
  }

  @media ${device.desktop} {
    font-size: 1.2rem;
  }

  @media ${device.laptop} {
    display: block;
  }

  a {
    position: relative;

    &:hover,
    &.active {
      color: ${theme.darkPurple};
    }

    &.buttonBlue {
      width: 154px;
      padding: 10px 20px;
      ${blueGradient};
      margin-left: 15px;

      @media ${device.desktop} {
        margin-left: 30px;
      }
    }

    &.buttonPurple {
      width: 154px;
      padding: 10px 20px;
      ${pinkGradient};
    }
  }

  .menu-item {
    margin-right: 15px;
    @media ${device.desktop} {
      margin-right: 30px;
    }
  }
`

export const StyledMobileNav = styled.div`
  text-transform: uppercase;

  a {
    position: relative;
    color: ${theme.white};

    &:hover,
    &.active {
      color: ${theme.darkPurple};
    }

    &.buttonBlue {
      padding: 10px 20px;
      text-align: center;
      ${blueGradient};
      color: ${theme.black};
      margin-top: 30px;
    }

    &.buttonPurple {
      padding: 10px 20px;
      text-align: center;
      ${pinkGradient};
      color: ${theme.black};
      margin-top: 30px;
    }
  }

  @media ${device.laptop} {
    display: none;
  }

  .bm-burger-button {
    position: absolute;
    width: 50px;
    height: 23px;
    right: 30px;
    top: 45px;
    text-transform: uppercase;

    button {
      &:focus {
        outline: none;
      }
    }
  }

  .bm-burger-bars {
    background: ${theme.black};
    border-radius: 5px;
  }

  .bm-burger-bars-hover {
    background: ${theme.gray};
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;

    span {
      top: 3px !important;
    }

    button:focus {
      outline: none;
    }
  }

  .bm-cross {
    background: ${theme.white};
    width: 4px !important;
    height: 20px !important;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  .bm-menu {
    background: ${theme.black};
    padding: 2.5em 1.5em 0;
    font-size: 1.2rem;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.8em;
  }

  .bm-item {
    display: inline-block;
    box-shadow: none;
    /* font-family: Montserrat; sans-serif; */
    font-size: 1.2rem;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export const StyledFooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  transition: all 0.3s ease-out;
  font-size: 0.7rem;

  @media ${device.tabletUp} {
    flex-direction: row;
    width: 700px;
    font-size: 1.2rem;
  }

  a {
    color: ${theme.white};
  }
`
