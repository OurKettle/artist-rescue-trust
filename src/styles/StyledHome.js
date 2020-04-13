import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledHome = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  grid-template-rows: repeat(4, auto);
  grid-auto-rows: auto;
  grid-auto-flow: row;

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
    padding: 20px;
  }

  .icon-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media ${device.tabletUp} {
      flex-direction: row;
    }

    .icon {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 30px;
      height: 175px;

      @media ${device.tabletUp} {
        justify-content: space-between;
      }

      :first-of-type img {
        margin-top: 0;
      }

      :nth-child(2) img {
        margin-top: 15px;
      }

      :last-of-type img {
        margin-top: 22px;
      }

      img {
        width: 100px;
      }

      p {
        align-self: flex-end;
        margin: 0;
      }
    }

    i {
      font-size: 6rem;

      @media ${device.tabletUp} {
        font-size: 8rem;
      }
    }
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
