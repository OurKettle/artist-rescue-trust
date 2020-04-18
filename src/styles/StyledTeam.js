import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledTeam = styled.div`
  .team-logo {
    width: 90%;
    margin: 0 auto 30px;

    @media ${device.tabletUp} {
      width: 60%;
      margin: 0 0 30px 0;
    }
  }
`
