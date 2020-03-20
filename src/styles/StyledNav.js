import styled from "styled-components"
import { theme } from "./Theme"
import { device } from "./MediaQueries"

export const StyledMobileNav = styled.div`

  @media ${device.laptop} {
    display: none;
  }

  .bm-burger-button {
    position: absolute;
    width: 29px;
    height: 23px;
    right: 30px;
    top: 45px;

    button:focus {
      outline: none;
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
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.8em;

    a {
      color: ${theme.white};
    }
  }

  .bm-item {
    display: inline-block;
    box-shadow: none;
    font-family: Montserrat; sans-serif;
    font-size: 18px;
  }
  
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export const StyledNav = styled.nav`
  display: none;

  @media ${device.laptop} {
    display: block;
  }

  a {
    position: relative;

    &:hover {
      color: #f16d2a;
    }

    &.active {
      color: #f16d2a;
    }
  }

  .menu-item {
    margin-right: 10px;
  }
`

export const StyledFooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tabletUp} {
    flex-direction: row;
  }
`
