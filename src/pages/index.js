import React from "react"
import styled from "styled-components"
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
import { Container, Flex, Section } from "../components/layoutComponents"
import { ButtonPrimary } from "../components/buttons"
import Clients from "../components/clients"
import { StaticImage } from "gatsby-plugin-image"
import { FaQuoteLeft } from "react-icons/fa"

const QuoteStyle = {
  color: "var(--clr-accent-lighter)",
  opacity: "0.8",
  fontSize: "80px",
}

const SingleFeaturedReview = styled.div`
  display: grid;
  place-items: center;
  p {
    text-align: left;
  }
`

const FlexItem = styled.div`
  display: flex;

  & > * + * {
    margin-left: 1em;
  }

  p {
    max-width: 70ch;
    width: 100%;
  }
`

export default function index() {
  return (
    <Layout>
      <SEO title="TSS" description="tss" />
      <HeroGrid />
      <Section className="spacing">
        <Container className="spacing text-center">
          <div>
            <p className="upper body--small">your secret marketing weapon</p>
            <h1 className="upper">
              <span className="italics">your new </span>
              <span className="accent">marketing team</span>{" "}
              <span className="italics">in sudbury, ON</span>
            </h1>
          </div>
          <div className="text-center spacing">
            <p>
              The Social Soulpreneur is a full-service marketing studio and
              social media agency specializing in content curation, brand
              development, digital advertising, website development, and social
              media management. We help develop your brand's visual identity and
              connect it with your audience in an authentic and engaging way.
            </p>
            <p>
              We help entrepreneurs and professionals bring their brand vision
              to life while taking care of the daily tasks of managing an
              effective online presence - giving them the time they need to
              focus on what they do best. We bring authenticity and connection
              to businesses and corporations through social media engagement and
              brand development to enhance their communications and brand image
              with their target audience.
            </p>
            <p>
              When you choose to work with The Social Soulpreneur, you get
              access to our entire team of expert content creators,
              photographers, videographers, developers, brand strategists and
              marketers to help put your brand in front of your target audience.
              From start-ups and franchises to local businesses and
              international companies, our team has the skills to effectively
              market your business. Since 2019 The Social Soulpreneur has worked
              with hundreds of brands in industries like mining, retail,
              finance, healthcare, telecommunications, construction, automotive,
              non-profit, and everywhere in between.
            </p>
          </div>
          <ButtonPrimary to="/contact">get your quote &#8594;</ButtonPrimary>
        </Container>
        <Container>
          <Flex className="spacing">
            <SingleFeaturedReview>
              <StaticImage
                src="../images/meghan-bonhomme-social-media-client.jpg"
                alt="sudbury social media client"
              />
              <FlexItem>
                <FaQuoteLeft style={QuoteStyle} />
                <div className="spacing">
                  <p className="italics bold">
                    TSS IS MY SECRET WEAPON! If you've been worried about
                    letting go of your business-baby and passing the reigns to
                    someone else,{" "}
                    <span className="accent">Hailey is the human I trust.</span>{" "}
                    I am from-the-bottom-of-my-heart grateful to have her on my
                    team!
                  </p>
                  <p className="upper">Meghan Bonhomme</p>
                </div>
              </FlexItem>
            </SingleFeaturedReview>
            <SingleFeaturedReview>
              <StaticImage
                src="../images/kamaldeep-bansal-social-media-client.jpg"
                alt="sudbury social media client"
              />
              <FlexItem>
                <FaQuoteLeft style={QuoteStyle} />
                <div className="spacing">
                  <p className="italics bold">
                    <span className="accent">
                      The Social Soulpreneur’s ability to bring forth my message
                      into the community is truly unmatched!
                    </span>{" "}
                    Having her on my team releases much of the constraints I
                    have as a small business owner, which directly allows me to
                    provide the service I love to provide. Thank you TSS for
                    bringing my purpose into the 21st century!
                  </p>
                  <p className="upper">Dr. kamaldeep bansal</p>
                </div>
              </FlexItem>
            </SingleFeaturedReview>
          </Flex>
        </Container>
      </Section>
      <Clients />
      <FullServices />
      <AllReviews />
      <CTA
        subtitle=""
        // title="Start connecting with your audience."
        title="Stop going it alone in your marketing efforts"
        description="Get an entire team of marketing experts working with you to connect you with your target audience and drive results. Whether you're looking to grow your brand, increase engagement, or boost conversions, we've got you covered. Click the link or give us a call today to schedule a free consultation and see how our team can help you achieve your goals."
      />
      <FormContact title="Discover how we can help your business grow" />
    </Layout>
  )
}
