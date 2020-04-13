import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledGetHelp = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 644px));
  justify-content: center;
  margin-top: 64px;

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
