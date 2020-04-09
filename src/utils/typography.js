import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"
import { theme } from "../styles/Theme"
grandViewTheme.headerWeight = "900"

grandViewTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    body: {
      color: `${theme.black}`,
      // font: `100%/1.75 Merriweather, Georgia, serif!important`,
      // fontSize: `16px!important`,
      textAlign: `left`,
    },
    "h1, h2, h3, h4, h5": {
      marginTop: `0`,
    },
  }
}

delete grandViewTheme.googleFonts

const typography = new Typography(grandViewTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
