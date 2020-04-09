import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import { blueGradient, pinkGradient } from "./Mixins"

export const StyledHero = styled.div`
         position: relative;
         height: 877px;
         background-color: ${theme.black};

         .image-wrapper {
           .image {
             /* // The below lines stretch the image to match the width and height of the container */
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             object-fit: cover;
             /* // This is the property that emulates background-size: cover */
           }
         }

         .hero-content-wrapper {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
         }

         .hero-content {
           display: flex;
           flex-direction: column;
           justify-content: flex-start;
           height: 100%;
           text-align: center;
           color: ${theme.white};
           padding: 64px 26px;
           transition: all 0.3s ease-out;

           @media ${device.tablet} {
             padding: 149px 50px;
             margin: auto;
           }

           @media ${device.laptop} {
             padding: 120px 50px;
             width: 900px;
             margin: auto;
           }

           @media ${device.desktop} {
             width: 1114px;
           }

           h1,
           h5 {
             color: ${theme.white};
             line-height: 2;
           }

           .heading {
             font-size: 1.5rem;

             @media ${device.desktop} {
               font-size: 3.5rem;
             }

             .highlight {
               background: ${theme.white};
               color: ${theme.black};
               padding: 3px 10px;
             }
           }

           .button-group {
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             align-items: center;

             @media ${device.tabletUp} {
               flex-direction: row;
             }

             button {
               ${blueGradient};
             }

             .button-cta {
               &:last-of-type {
                 button {
                   ${pinkGradient};
                 }
               }
             }
           }
         }
       `
