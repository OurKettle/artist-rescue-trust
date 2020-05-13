import { createGlobalStyle } from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import { Benton, Nimbus } from "./Mixins"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

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

  h2 {
    font-size: 1.5rem;
    ${Benton};
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
  }

  .footer {
    font-size: .8rem;

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: .8rem;
      }
    }
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
      font-size: 1.1rem;
      margin-bottom: 40px;
      line-height: 1.5;
      color: ${theme.gray};
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

ul li {
  ${Nimbus}
  font-size: 1.1rem;
  line-height: 2;
}

  iframe[name="donorbox"] {
    max-width: 425px !important;
    display: block !important;
    margin: auto !important;
    /* width: 100% !important;
    max-width: 100% !important;
    min-width: 310px !important;
    max-height: none !important;

    .secondary-tabs {
      width: 100% !important;
      max-width: 100% !important;
    }

    .donation-widget.tabs {
      width: 100% !important;
      max-width: 100% !important;
    } */
  }

  .cognito .c-forms-form {

    .c-button:not(.c-save-resume-button),
    .c-save-resume-button:not(.c-icon-button) {
      ${Benton};
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      border-radius: 0;
      text-transform: uppercase;
      padding: 15px 30px 12px;
    }

    .c-save-resume-button:not(.c-icon-button) {
      border: 1px solid ${theme.darkPurple};
    }

    .c-button:not(.c-save-resume-button) {
      background-color: ${theme.darkPurple};
    }
  }

  .d-flex {
    display: flex;
    flex-direction: column;
  }
`
