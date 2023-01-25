import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import AllReviews from "../components/reviews"
import CTA from "../components/CTA"
import SEO from "../components/seo"
import BannerImg from "../images/hero-circles-full.svg"
import { ButtonPrimary } from "../components/buttons"
import Team from "../components/team"
import FullServices from "../components/fullServices"

export default function About() {
  return (
    <Layout>
      <SEO title="Abous Us - " description="" />
      <Banner
        to1="/"
        link1="Home"
        to2="/about"
        link2="About"
        title="about us"
        description="Your social media marketing agency in sudbury!"
        img={BannerImg}
      />
      <Section>
        <Container className="spacing text-center">
          <div>
            <p className="upper body--small">
              Think of us as a member of your marketing team
            </p>
            <h1 className="upper">
              <span className="italics">why hire </span>
              <span className="accent">TSS</span>{" "}
              <span className="italics">as your in-house marketing team?</span>
            </h1>
          </div>
          <div className="text-center spacing">
            <p>
              The Social Soulpreneur is a team of expert social media managers
              and marketing and branding gurus who know how to effectively and
              efficiently manage your audience in a timely manner – with no
              programming and no automation. Just real, organic growth.
            </p>
            <p>
              We are a full-service marketing and social media management
              agency. We take care of all the daily tasks that go into running
              and managing an effective social media account and make social
              media fun again! We work with a variety of clients in a wide range
              of industries.
            </p>
            <p>
              From start-ups to international brands, to local businesses to
              franchises – we’ve got the tools to effectively work with them
              all. We’ve helped clients in industries like mining, retail,
              finance, food, healthcare, and everywhere in between leverage the
              power of social media to connect with their audience and
              communicate their message.
            </p>
          </div>
          <ButtonPrimary to="/contact">get your quote</ButtonPrimary>
        </Container>
      </Section>
      <Team />
      <FullServices />
      <AllReviews />
      <CTA
        subtitle="need to request a service"
        title="title"
        description="KLAAD Glass can help you with all your residential or commercial glass and window service needs"
      />
      <FormContact title="get a free estimate for your glass installation or repair!" />
    </Layout>
  )
}