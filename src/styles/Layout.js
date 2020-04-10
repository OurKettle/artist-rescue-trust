import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import { blueGradient, Benton, Nimbus } from "./Mixins"

import logo from "../images/logo.png"

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  a {
    text-decoration: none;
  }

  .main-content {
  .heading {
    font-size: 2.5rem;
    ${Benton};
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    ${Nimbus};
    line-height: 2;

      &.intro {
      font-weight: 700;
      margin-bottom: 50px; 

      &.small {
        width: 100%;

        @media ${device.desktop} {
          width: 420px;
        }
      }
    }
  }

  blockquote {
    ${Nimbus}
    width: 100%;
    margin: 0;

    @media ${device.tablet} {
      width: 279px;
    }
    
    p {
      font-size: 1.4rem;
      margin-bottom: 40px;
      line-height: 1.5;
    }

    &.right {
      text-align: right;
      float: right;
    }

    &.left {
      text-align: left;
      float: left;
    }

    footer {
      font-size: 1.4rem;

      span {
        font-weight: 700;
      }
    }
  }
}

  /* Responsive Font Hack - media queries are not supported in typography.js */
  /* @media ${device.laptop} {
    p:not(.prompt),
    ul,
    .bio,
    nav a {
      font-size: 112.5% !important;
      text-align: justify;
    }
  } */
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  .header-left {
    ${blueGradient}
    width: 286px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    transition: width 0.3s ease-out;

    @media ${device.tablet} {
      width: 279px;
    }

    @media ${device.laptop} {
      width: 325px;
    }

    @media ${device.desktop} {
      width: 400px;
    }

    @media ${device.desktopL} {
      width: 591px;
    }

    .logo {
      top: 2px;
      left: 368px;
      width: 191px;
      height: 98px;
      background: transparent url(${logo}) 0% 0% no-repeat padding-box;
      mix-blend-mode: multiply;
      background-size: cover;
      opacity: 1;
    }
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    height: 100%;
    padding-right: 13px;
    transition: all 0.3s ease-out;

    @media ${device.desktop} {
      padding-right: 100px;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.black};
  text-align: center;

  text-transform: uppercase;
  padding: 50px 20px 40px;

  @media ${device.mobileLUp} {
    padding: 40px;
  }

  @media ${device.tabletUp} {
    padding: 86px 60px;
  }

  .logo {
    width: 300px;
    margin-bottom: 50px;

    @media ${device.tabletUp} {
      width: 442px;
    }
  }
`
