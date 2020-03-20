import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

// Typography
import { rhythm } from "../utils/typography"

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

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
  align-content: center;

  .title {
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }
`

export const Footer = styled.footer`

}
`
