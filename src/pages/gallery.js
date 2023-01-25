import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, GridThree, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import AllReviews from "../components/reviews"
import CTA from "../components/CTA"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorInline, ButtonPrimary } from "../components/buttons"
import SEO from "../components/seo"

export default function Gallery() {
  return (
    <Layout>
      <SEO
        title="Project Gallery - KLAAD Glass Ltd."
        description="Have a look at our most recent residential and commercial window and door installations, repairs, and more!"
      />
      <Banner
        to1="/"
        link1="Home"
        to2="/gallery"
        link2="Gallery"
        title="the KLAAD Glass project gallery"
      />
      <Section>
        <Container className="spacing">
          <h2 className="title bold caps">
            residential & commercial window installations, repairs, storm doors
          </h2>
          <GridThree>
            <StaticImage
              className="stretch"
              src="../images/gallery/featured/window-repair-1.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
              className="stretch"
              src="../images/gallery/featured/window-repair-2.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
              className="stretch"
              src="../images/gallery/featured/window-repair-3.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
              className="stretch"
              src="../images/gallery/featured/window-repair-4.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
              className="stretch"
              src="../images/gallery/featured/window-repair-5.jpg"
              alt="calgary glass contractor"
            />
            <StaticImage
              className="stretch"
              src="../images/gallery/featured/window-repair-6.jpg"
              alt="calgary glass contractor"
            />
          </GridThree>
          <div className="center spacing">
            <h3 className="italics caps">request a service</h3>
            <p>
              Call us at{" "}
              <AnchorInline href="tel: 403-891-3172">403-891-3172</AnchorInline>{" "}
              or fill out our contact form to reuest a service or free estimate
              for us!
            </p>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </div>
        </Container>
      </Section>
      <AllReviews />
      <CTA
        subtitle="need to request a service"
        description="KLAAD Glass can help you with all your residential or commercial glass and window service needs"
      />
      <FormContact title="get a free estimate for your glass installation or repair!" />
    </Layout>
  )
}
