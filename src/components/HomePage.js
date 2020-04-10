import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Styles
import { StyledHomePage } from "../styles/StyledHomePage"

const HomePage = () => {
  return (
    <StaticQuery
      query={heroQuery}
      render={data => {
        const h1 = data.h1
        const h2 = data.h2
        const h3 = data.h3
        const h4 = data.h4
        const h5 = data.h5

        return (
          <StyledHomePage className="main-content">
            <HelmetDatoCms>
              <script
                src="https://donorbox.org/widget.js"
                paypalExpress="false"
              ></script>
            </HelmetDatoCms>
            <div className="box a">
              <Img className="image" fluid={h1.image.fluid} duration={1000} />
            </div>
            <div className="box b">
              <blockquote className="right">
                <p>
                  “I think right now, we’re in an incredibly fragile position,
                  all of us freelancers.”
                </p>
                <footer>
                  <span>Waxahatchee,</span>
                  <br />
                  singer/songwriter
                </footer>
              </blockquote>
            </div>
            <div className="box c">
              <Img fluid={h3.image.fluid} duration={1000} />
            </div>
            <div className="box d">
              <Img fluid={h5.image.fluid} duration={1000} />
            </div>
            <div className="box e">
              <p className="intro">
                Artist Rescue Trust (A.R.T.) exists is to provide relief funding
                to musicians and artists whose ability to perform, tour and earn
                a living has been negatively affected by COVID-19. A.R.T. will
                provide $1,500 over three months to artists in need and amplify
                the stories, performances and creations they had hoped to share
                with the world before the pandemic limited their ability to do
                so.
              </p>

              <h1 className="heading">The Problem</h1>
              <p>
                Those of us who are close to the arts community know the
                financial pressures that have long been increasing for creators
                and artists. The creative class — the musicians, authors,
                designers, poets, producers — their livelihood and existence is
                dependant on their ability to create and share their work, and
                for their communities to access it. The widespread cancellation
                of exhibits, live performances and events has had a
                disproportionate impact on artistic communities across the
                country - especially those who rely on these events to pay their
                bills. Many artists supplement their incomes with gig work,
                freelance or service industry jobs which are also severely
                impacted. This is our moment to support the artists who fill our
                hearts and minds with their work.
              </p>
            </div>
            <div className="box f">
              <h1 className="heading">What We Want To Do About It</h1>
              <p className="intro small">
                Our goal is to provide XX artists with $1500 over three months.
              </p>
              <p>
                We call on those who have the means to support the creative
                community to contribute to this fund.
              </p>
              <p>
                We invite artists and creators who have financially suffered
                from cancelled events and bookings to apply to receive funding.
              </p>
              <p>
                A small percentage of funds donated will cover processing fees.
                Artist Rescue Trust is not taking any percentage of funds raised
                to cover administrative costs. All donations will go directly to
                artists.
              </p>
            </div>
            <div className="box g">
              <h1 className="heading">Who Is This For?</h1>
              <p className="intro">
                Professional artistic creators whose primary source of income is
                made through live performance, tours or exhibits.
              </p>
              <div className="icon-group">
                <div className="icon">
                  <i className="far fa-circle"></i>
                  <p>Musical Artists</p>
                </div>
                <div className="icon">
                  <i className="far fa-circle"></i>
                  <p>Visual Artists</p>
                </div>
                <div className="icon">
                  <i className="far fa-circle"></i>
                  <p>Literary Artists</p>
                </div>
              </div>
            </div>
            <div className="box h donor-box">
              <iframe
                title="donor-box"
                allowpaymentrequest=""
                frameBorder="0"
                height="900px"
                name="donorbox"
                scrolling="no"
                seamless="seamless"
                src="https://donorbox.org/embed/artist-rescue-trust"
                width="100%"
              ></iframe>
            </div>
            <div className="box i">
              <Img fluid={h2.image.fluid} duration={1000} />
            </div>
            <div className="box j">
              <blockquote className="left">
                <p>
                  “It’s probably going to be awhile before a lot of bands are
                  going to be able to go out again because everybody’s just got
                  to spend all their energy saving, trying to make up for the
                  loss.”
                </p>
                <footer>
                  <span>Angelica Garcia,</span>
                  <br />
                  Latin pop singer
                </footer>
              </blockquote>
            </div>
            <div className="box k">
              <Img fluid={h4.image.fluid} duration={1000} />
            </div>
          </StyledHomePage>
        )
      }}
    />
  )
}

export const heroQuery = graphql`
  query {
    h1: file(relativePath: { eq: "homepage-1.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h2: file(relativePath: { eq: "homepage-2.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h3: file(relativePath: { eq: "homepage-3.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h4: file(relativePath: { eq: "homepage-4.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h5: file(relativePath: { eq: "homepage-5.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomePage
