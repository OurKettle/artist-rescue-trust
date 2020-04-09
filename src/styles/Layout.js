import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import { blueGradient } from "./Mixins"

import logo from "../images/logo.png"

// Typography
import { rhythm } from "../utils/typography"

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  /* padding: 0 ${rhythm(3 / 4)}; */

  ul {
    margin-left: 0;
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

           a {
             box-shadow: none;
             text-decoration: none;
             color: ${theme.black};
             font-weight: bold;
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
  padding: 30px 0;

  .logo {
  }
`
