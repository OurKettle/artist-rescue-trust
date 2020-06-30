import styled from "styled-components"
import { device } from "./MediaQueries"

export const StyledPagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    a {
      box-shadow: none;
      font-size: 14px;

      @media ${device.tabletUp} {
        font-size: 18px;
      }

      &.previous i {
        margin-right: 10px;
      }

      &.next i {
        margin-left: 10px;
      }
    }
  }
`
