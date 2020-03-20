const size = {
  mobileS: "320px",
  mobile: "480px",
  mobileL: "600px",
  tablet: "768px",
  laptop: "992px",
}

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.mobile})`,
  mobile: `(min-width: ${size.mobile}) and (max-width: ${size.mobileL})`,
  mobileUp: `(min-width: ${size.mobile})`,
  mobileLUp: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  tabletUp: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
}

// /* Smartphones (landscape) ----------- */
// @media only screen and (min-width : 321px) {
//   /* Styles */
// }

// /* Smartphones (portrait) ----------- */
// @media only screen and (max-width : 320px) {
//   /* Styles */
// }

// /* iPads (portrait and landscape) ----------- */
// @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
//   /* Styles */
// }

// /* iPads (landscape) ----------- */
// @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
//   /* Styles */
// }

// /* iPads (portrait) ----------- */
// @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
//   /* Styles */
// }

// /* Desktops and laptops ----------- */
// @media only screen and (min-width : 1224px) {
//   /* Styles */
// }
