import { theme } from "./Theme"

export function blueGradient() {
  return `
    background: rgb(115, 110, 229);
    background: transparent linear-gradient(90deg, ${theme.lightTeal} 0%, ${theme.darkPurple} 100%) 0% 0% no-repeat padding-box;
  `
}

export function pinkGradient() {
  return `
    background: rgb(115,110,229);
    background: transparent linear-gradient(90deg, ${theme.darkPurple} 0%, ${theme.pink} 100%) 0% 0% no-repeat padding-box;
  `
}
