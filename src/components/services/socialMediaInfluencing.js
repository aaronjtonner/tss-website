import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonUnderline } from "../buttons"
import { Container, Section } from "../layoutComponents"
import styled from "styled-components"
import SocialMediaFAQ from "../faqs/socialMediaFAQ"
import InfluencerFAQ from "../faqs/influencerFaq"

const WrapperTextRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 4em 1fr;

  @media screen and (max-width: 40em) {
    display: flex;
    flex-direction: column-reverse;
  }

  .img-right {
    border-radius: var(--br);
    grid-column: 1 / span 2;
    grid-row: 1 / -1;

    z-index: 1;
  }
`

const Text = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  z-index: 1000;
  background: #f8f8f8;
  padding: 2em;
  border: 1px solid var(--clr-accent);
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  align-self: center;

  h2 {
    font-size: var(--fs-b);
    line-height: 1.1;
    text-transform: capitalize;
  }
`

export default function SocialMediaInfluencing() {
  return (
    <Section className="spacing">
      <Container className="spacing">
        <div className="text-center">
          <h2 className="title upper">
            <span className="italics">your</span>{" "}
            <span className="accent">social media </span>
            <span className="italics">influencer</span>
          </h2>
        </div>
        <WrapperTextRight>
          <Text className="spacing text-left">
            <div>
              <h2>
                <span className="accent">social media influencing</span> in
                sudbury, ON
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                ea.
              </p>
            </div>
            <div>
              <h2>
                <span className="accent">benefits</span> of{" "}
                <span className="accent">sudbury social media marketing</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, suscipit.
              </p>
            </div>
            <div>
              <h2>
                <span className="accent">our unique 2-phase system </span> for
                social media <span className="accent">management</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                esse.
              </p>
            </div>
            <ButtonUnderline to="/contact">contact us &#8594;</ButtonUnderline>
          </Text>
          <StaticImage
            className="img-right"
            src="../../images/social-media-influencer-marketing-sudbury.jpg"
            alt="social media influencer marketing services in sudbury, ON"
            objectFit="contain"
          />
        </WrapperTextRight>
      </Container>
      <InfluencerFAQ />
    </Section>
  )
}
