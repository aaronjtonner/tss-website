import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Flex, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import FullServices from "../components/fullServices"
import SEO from "../components/seo"
import BannerImg from "../images/hero-circles-full.svg"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonPrimary } from "../components/buttons"
import Clients from "../components/clients"
import ServicesList from "../components/services/servicesList"
import CTA from "../components/CTA"
import SocialMediaManagement from "../components/services/socialMediaManagement"
import SocialMediaInfluencing from "../components/services/socialMediaInfluencing"
import WebDesign from "../components/services/webDesign"
import TeamCondensed from "../components/teamCondensed"

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Our Services - KLAAD Glass Ltd."
        description="We offer residential & commercial window repairs & replacement services, and storm door services in Calgary and surrounding areas."
      />
      <Banner
        to1="/"
        link1="Home"
        to2="/services"
        link2="Services"
        title="your in-house social media marketing agency in sudbury"
        description="desc"
        img={BannerImg}
      />
      <Section>
        <Flex>
          <StaticImage src="../images/services-1.jpg" alt="" />
          <Container className="spacing">
            <div>
              <p className="body--small upper">
                your in-house sudbury marketing team
              </p>
              <h1 className="upper">
                <span className="italics">main services</span>{" "}
                <span className="accent">overview</span>
              </h1>
            </div>
            <div>
              <p>
                The Social Soulpreneur is a team of expert social media managers
                and marketing and branding gurus who know how to effectively and
                efficiently manage your audience in a timely manner – with no
                programming and no automation. Just real, organic growth.
              </p>
              <p>
                The Social Soulpreneur is a team of expert social media managers
                and marketing and branding gurus who know how to effectively and
                efficiently manage your audience in a timely manner – with no
                programming and no automation. Just real, organic growth.
              </p>
              <p>
                The Social Soulpreneur is a team of expert social media managers
                and marketing and branding gurus who know how to effectively and
                efficiently manage your audience in a timely manner – with no
                programming and no automation. Just real, organic growth.
              </p>
            </div>
            <ButtonPrimary to="/contact">get quote</ButtonPrimary>
          </Container>
        </Flex>
      </Section>
      <Clients />
      <ServicesList />
      <CTA
        subtitle="need to request a service?"
        title="call us to get your quote!"
        description="We work with our clients to develop and execute a strategic social media plan based on market research and your company’s unique goals and objectives."
      />
      <SocialMediaManagement />
      <SocialMediaInfluencing />
      <WebDesign />
      <TeamCondensed />
      <FormContact title="get in touch with us using the form below" />
    </Layout>
  )
}
