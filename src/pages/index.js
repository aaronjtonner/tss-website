import React from "react"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import FullServices from "../components/fullServices"
import AllReviews from "../components/reviews"
import FormContact from "../components/forms/formContact"
import FeaturedGallery from "../components/featuredGallery"
import SEO from "../components/seo"
import CTA from "../components/CTA"
import HeroGrid from "../components/heros/heroGrid"
import { Container, Section } from "../components/layoutComponents"
import { ButtonPrimary } from "../components/buttons"
import Clients from "../components/clients"

export default function index() {
  return (
    <Layout>
      <SEO title="TSS" description="tss" />
      <HeroGrid />
      <Section>
        <Container className="spacing text-center">
          <div>
            <p className="upper body--small">
              Think of us as a member of your marketing team
            </p>
            <h1 className="upper">
              <span className="italics">full-service </span>
              <span className="accent">marketing</span> in sudbury, ON
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
      <Clients />
      <FullServices />
      <AllReviews />
      <CTA
        subtitle="need to request a service?"
        title="call us to get your quote!"
        description="We work with our clients to develop and execute a strategic social media plan based on market research and your company’s unique goals and objectives."
      />
      <FormContact title="Write us a message!" />
    </Layout>
  )
}
