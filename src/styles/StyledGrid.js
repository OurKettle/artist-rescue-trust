import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 644px));
  justify-content: center;
  margin: 64px 0;

  @media ${device.desktop} {
    margin-top: 152px;
  }

  .box {
    padding: 20px;
  }

  hr {
    border-style: solid;
  }
`
