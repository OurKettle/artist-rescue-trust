import styled from "styled-components"
import { device } from "./MediaQueries"
// import { theme } from "./Theme"

export const StyledTeam = styled.div`
  .avatar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, auto));
    grid-gap: 20px;
    justify-content: center;
    margin-bottom: 50px;
    padding: 20px;

    @media ${device.tabletUp} {
      grid-template-columns: repeat(auto-fit, minmax(104px, auto));
    }
  }
  .team-logo {
    width: 90%;
    margin: 0 auto 30px;

    @media ${device.tabletUp} {
      width: 60%;
      margin: 0 0 30px 0;
    }
  }
`
