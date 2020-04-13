import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledHow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
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
    align-items: center;
    margin: 50px 68px;
  }

  @media ${device.desktop} {
    grid-gap: 70px;
    grid-template-columns: 1fr 624px 1fr;
    grid-auto-flow: column;
    align-items: flex-start;
  }

  .box {
    padding: 20px;
  }

  /* Grid */
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
    }

    @media ${device.desktop} {
      order: 2;
      margin-top: 100px;
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
      order: 10;
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
      margin-top: 60px;
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
      order: 4;
    }

    @media ${device.desktop} {
      order: 6;
      /* margin-top: -250px; */
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
      order: 10;
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
      order: 5;
    }

    @media ${device.desktop} {
      order: 9;
      margin-top: 140px;
      height: 300px;
    }
  }
`
