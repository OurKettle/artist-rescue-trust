import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import {
  Button,
  buttonHover,
  buttonHoverBefore,
  blueGradient,
  blueGradientReverse,
  pinkGradient,
  pinkGradientReverse,
  Benton,
} from "./Mixins"

export const StyledNav = styled.nav`
  display: none;

  @media ${device.laptop} {
    display: block;
  }

  a {
    position: relative;
    color: ${theme.white};
    ${Benton}
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: color 0.3s ease-out;

    @media ${device.laptop} {
      font-size: 1rem;
    }

    @media ${device.desktop} {
      font-size: 1.2rem;
    }

    &:hover,
    &.active {
      color: ${theme.darkPurple};
    }

    &.buttonBlue {
      ${Button};
      ${blueGradient};
      margin-left: 15px;
      ${buttonHover};

      @media ${device.desktop} {
        margin-left: 30px;
      }

      &:before {
        ${blueGradientReverse};
        ${buttonHoverBefore};
      }

      &:hover {
        &:before {
          opacity: 1;
        }
      }
    }

    &.buttonPurple {
      ${Button};
      ${pinkGradient};
      ${buttonHover};

      &:before {
        ${pinkGradientReverse};
        ${buttonHoverBefore};
      }

      &:hover {
        &:before {
          opacity: 1;
        }
      }
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
  ${Benton}
  letter-spacing: 1.5px;
  text-transform: uppercase;

  a {
    ${Benton};
    font-size: 1rem;
    position: relative;
    color: ${theme.white};

    &:hover,
    &.active {
      color: ${theme.darkPurple};
    }

    &.buttonBlue {
      ${Button}
      ${blueGradient};
    }

    &.buttonPurple {
      ${Button}
      ${pinkGradient};
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

    .bm-icon {
      margin: 0;
      position: relative;
      top: -5px;
      color: ${theme.white};
    }

    button {
      top: -5px !important;
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
    height: auto !important;
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
    margin-bottom: 10px;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export const StyledFooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease-out;
  font-size: 0.9rem;
  margin-bottom: 35px;

  @media ${device.mobileLUp} {
    flex-direction: row;
  }

  @media ${device.tabletUp} {
    width: 700px;
    font-size: 1.2rem;
  }

  a {
    ${Benton}
    letter-spacing: 1.5px;
    color: ${theme.white};
    padding: 20px 0;
  }
`

export const StyledSocialNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  transition: all 0.3s ease-out;
  font-size: 2.5rem;

  /* @media ${device.tabletUp} {
    width: 700px;
  } */

  a {
    color: ${theme.white};
    padding: 20px 0;
    transition: color .25s ease-out;
      
      &.instagram:hover {
        color: ${theme.instagram};
      }

      &.twitter:hover {
        color: ${theme.twitter};
      }

      &.facebook:hover {
        color: ${theme.facebook};
      }

      &.linkedin:hover {
        color: ${theme.linkedin};
      }
  }
`
