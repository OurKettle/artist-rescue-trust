import { theme } from "./Theme"

export function Button() {
  return `
    width: auto;
    padding: 10px 20px 7px;
    text-align: center;
    color: ${theme.black};
    margin-top: 30px;
  `
}

export function buttonHover() {
  return `
    position: relative;
    display: inline-block;
    margin-top: 0;
    background-size: 100%;
    z-index: 100;
  `
}

export function buttonHoverBefore() {
  return `
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: -100;
    transition: opacity 0.3s ease-out;
  `
}

export function blueGradient() {
  return `
    background: rgb(115, 110, 229);
    background: transparent linear-gradient(90deg, ${theme.lightTeal} 0%, ${theme.darkPurple} 100%) 0% 0% no-repeat padding-box;
  `
}

export function blueGradientReverse() {
  return `
    background: rgb(115, 110, 229);
    background: transparent linear-gradient(90deg, ${theme.darkPurple} 0%, ${theme.lightTeal} 100%) 0% 0% no-repeat padding-box;
  `
}

export function pinkGradient() {
  return `
    background: rgb(115,110,229);
    background: transparent linear-gradient(90deg, ${theme.darkPurple} 0%, ${theme.pink} 100%) 0% 0% no-repeat padding-box;
  `
}

export function pinkGradientReverse() {
  return `
    background: rgb(115,110,229);
    background: transparent linear-gradient(90deg, ${theme.pink} 0%, ${theme.darkPurple} 100%) 0% 0% no-repeat padding-box;
  `
}

export function Benton() {
  return `
    font-family: benton-sans-compressed, sans-serif;
    font-style: normal;
    font-weight: 700;
  `
}

export function Nimbus() {
  return `
    font-family: nimbus-sans-extended, sans-serif;
    font-style: normal;
    font-weight: 400;
  `
}

export function NimbusBold() {
  return `
    font-family: nimbus-sans-extended, sans-serif;
    font-style: normal;
    font-weight: 700;
  `
}

export function Work() {
  return `
    font-family: work-sans, sans-serif;
    font-style: normal;
    font-weight: 400;
  `
}
