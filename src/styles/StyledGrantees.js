import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"

import {
  Nimbus,
} from "./Mixins"

export const StyledGrantees = styled.div`
  .grantee-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 60px;
    justify-content: center;
    margin-bottom: 50px;
    padding: 20px;

    @media ${device.mobileUp} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .image {
    margin-bottom: 20px;
  }

  .name {
    text-transform: capitalize;
  }

  .title {
    margin: 0 0 20px 0;
    line-height: 1;
    color: ${theme.gray}
  }

  .bio {
    margin-bottom: 40px;
  }

  .question-block {
    margin: 0 0 20px 0;
    margin-bottom: 40px;

    .question {
      color: ${theme.gray};
      margin: 0;
    }
  }

  .answer p {
    ${Nimbus};
    line-height: 2;
    margin: 0;
  }

  a {

    .button {
      ${Nimbus};
      display: inline-block;
      width: auto;
      color: ${theme.white};
      background-color: ${theme.darkPurple};
      font-size: 18px;
      text-align: center;
      padding: 15px;

        @media ${device.mobileUp} {
          margin-bottom: 0;
        }
      }
    }

  .footer {
    display: flex;
    /* flex-direction: column; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media ${device.mobileUp} {
      flex-direction: row;
    }

    .social-networks {
      display: flex;

      img {
        width: 40px;
        height: 40px;
        margin-left: 15px;
        filter: invert(46%) sepia(67%) saturate(0%) hue-rotate(173deg) brightness(90%) contrast(91%);
        /* https://codepen.io/sosuke/pen/Pjoqqp */

        @media ${device.mobileUp} {
          margin-left: 20px;
        }
      }
    }
  }
`
