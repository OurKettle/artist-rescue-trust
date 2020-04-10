import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-auto-rows: auto;
  grid-auto-flow: row;
  background-color: #fff;
  color: #444;

  @media ${device.tabletUp} {
    grid-gap: 40px 0;
    margin: 0 25px;
  }

  @media ${device.laptop} {
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    margin: 50px 68px;
  }

  @media ${device.desktop} {
    grid-gap: 70px;
    grid-template-columns: 1fr 624px 1fr;
    grid-auto-flow: column;
  }

  .box {
    /* background-color: #444; */
    /* color: #fff; */
    /* border-radius: 5px; */
    padding: 20px;
    /* font-size: 150%; */
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

  .icon-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    i {
      font-size: 8rem;
    }
  }

  .a {
    grid-column: auto;
    order: 2;

    @media ${device.tabletUp} {
      grid-column: auto / span 1;
    }

    @media ${device.laptop} {
      order: 1;
    }

    @media ${device.desktop} {
      order: 1;
      height: 397px;
    }

    .image {
      @media ${device.tabletUp} {
      }

      @media ${device.laptop} {
      }

      @media ${device.desktop} {
        margin-bottom: 200px;
      }
    }
  }

  .b {
    grid-column: auto;
    order: 2;

    @media ${device.tabletUp} {
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 3;
      margin-top: -500px;
    }

    @media ${device.desktop} {
      order: 2;
      margin-top: -300px;
    }
  }

  .c {
    grid-column: auto;
    order: 8;

    @media ${device.tabletUp} {
      order: 9;
      grid-column: span 1;
    }

    @media ${device.laptop} {
      grid-column: 1 / span 1;
      order: 4;
    }

    @media ${device.desktop} {
      grid-column: span 1;
      order: 3;
      margin-top: -440px;
    }
  }

  .d {
    grid-column: auto;
    order: 3;

    @media ${device.tabletUp} {
      order: 11;
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 10;
    }

    @media ${device.desktop} {
      order: 4;
      height: 500px;
    }
  }

  .e {
    grid-column: auto;
    order: 1;

    @media ${device.tabletUp} {
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 2;
    }

    @media ${device.desktop} {
      order: 5;
      /* margin-top: 60px; */
    }
  }

  .f {
    grid-column: auto;
    order: 3;

    @media ${device.tabletUp} {
      order: 4;
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 5;
    }

    @media ${device.desktop} {
      order: 6;
    }
  }

  .g {
    grid-column: auto;
    order: 5;

    @media ${device.tabletUp} {
      order: 6;
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 7;
    }

    @media ${device.desktop} {
      order: 7;
    }
  }

  .h {
    grid-column: auto;
    order: 7;

    @media ${device.tabletUp} {
      order: 10;
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 10;
    }

    @media ${device.desktop} {
      order: 8;
    }
  }

  .i {
    grid-column: auto;
    order: 4;

    @media ${device.tabletUp} {
      order: 5;
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 9;
    }

    @media ${device.desktop} {
      order: 9;
      margin-top: 125px;
    }
  }

  .j {
    grid-column: auto;
    order: 9;

    @media ${device.tabletUp} {
      order: 8;
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 8;
    }

    @media ${device.desktop} {
      order: 10;
      margin-top: 50px;
    }
  }

  .k {
    grid-column: auto;
    order: 6;

    @media ${device.tabletUp} {
      order: 7;
      grid-column: span 1;
    }

    @media ${device.laptop} {
      order: 6;
    }

    @media ${device.desktop} {
      order: 11;
      margin-top: 120px;
    }
  }
`
