import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import {
  buttonHover,
  buttonHoverBefore,
  blueGradient,
  pinkGradient,
  Benton,
  Nimbus,
  NimbusBold,
} from "./Mixins"

export const StyledHero = styled.div`
  position: relative;
  height: 1020px;
  background-color: ${theme.black};

  @media ${device.mobileUp} {
    height: 830px;
  }

  @media ${device.tablet} {
    height: 800px;
  }

  @media ${device.laptop} {
    height: 750px;
  }

  @media ${device.desktop} {
    height: 877px;
  }

  .hero-bg-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 80%;

    @media ${device.tablet} {
      height: 70%;
    }

    @media ${device.laptop} {
    }

    @media ${device.desktop} {
      height: 100%;
    }
  }

  .hero-content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    text-align: center;
    color: ${theme.white};
    padding: 10px 0;
    transition: all 0.3s ease-out;

    @media ${device.mobileUp} {
      padding: 64px 0;
      margin: auto;
    }

    @media ${device.tablet} {
      padding: 149px 50px;
      margin: auto;
    }

    @media ${device.laptop} {
      padding: 120px 0 0 0;
      width: 900px;
      margin: auto;
    }

    @media ${device.desktop} {
      width: 1330px;
    }

    h1,
    h5 {
      color: ${theme.white};
      line-height: 1.5;
    }

    .heading {
      font-size: 1.5rem;
      ${NimbusBold}
      padding: 0 35px;
      letter-spacing: 1px;

      @media ${device.desktop} {
        font-size: 3.5rem;
        padding: 0;
      }

      .highlight {
        display: inline-block;
        background: ${theme.white};
        color: ${theme.black};
        padding: 3px 10px 6px;
        margin-top: 37px;
      }
    }

    .sub-heading {
      ${Nimbus}
      font-size: 1.1rem;
      padding: 0 70px;

      @media ${device.desktop} {
        font-size: 1.6rem;
        padding: 0 275px;
        margin: 0;
      }
    }

    .button-group {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      @media ${device.tabletUp} {
        flex-direction: row;
        margin-top: 80px;
      }

      .button-cta {
        width: 287px;
        margin-bottom: 30px;

        a {
          color: ${theme.black};
        }

        .button {
          display: block;
          width: 100%;
          ${Benton};
          font-size: 2.5rem;
          padding: 10px 0;
          margin-bottom: 20px;
          border: 0;

          &:hover {
            cursor: pointer;
          }
        }

        &:first-of-type {
          .button {
            ${blueGradient};
            ${buttonHover};

            &:before {
              ${buttonHoverBefore};
              ${pinkGradient};
            }

            &:hover {
              &:before {
                opacity: 1;
              }
            }
          }
        }

        &:last-of-type {
          .button {
            ${buttonHover};
            ${pinkGradient};

            &:before {
              ${blueGradient};
              ${buttonHoverBefore};
            }

            &:hover {
              &:before {
                opacity: 1;
              }
            }
          }
        }

        .subtext {
          ${Nimbus}
          padding: 0 20px;
        }
      }
    }
  }
`
