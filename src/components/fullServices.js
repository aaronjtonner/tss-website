import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import {
  AnchorInline,
  ButtonInline,
  ButtonPrimary,
  ButtonUnderline,
} from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

const Item = styled.div`
  text-align: center;
`

const ImgStyle = {
  borderRadius: "1000px",
}

export default function FullServices() {
  return (
    <Section>
      <Container className="spacing">
        <div className="spacing center">
          <div>
            <p className="body--small upper">
              your marketing force to be reckoned with
            </p>
            <h2 className="title italics caps bold">
              our <span className="italics accent">digital marketing</span>{" "}
              services
            </h2>
          </div>
        </div>
        <div className="spacing-lg">
          <GridThree>
            <Item className="spacing">
              <StaticImage
                style={ImgStyle}
                src="../images/home-window-repair-installation-calgary.jpg"
                alt="home window repair & installation calgary"
              />
              <h3 className="upper bold">social media management</h3>
              <p>
                We work with our clients to develop and execute a strategic
                social media plan based on market research and your company’s
                unique goals and objectives.
              </p>
              <ButtonUnderline
                className="button"
                to="/services#socialmediamanagement"
              >
                social media management &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                style={ImgStyle}
                src="../images/24-hour-commercial-window-repair-calgary.jpg"
                alt="24/7 commercial window repair calgary"
              />
              <h3 className="upper bold">social media influencing</h3>
              <p>
                We work with our clients to develop and execute a strategic
                social media plan based on market research and your company’s
                unique goals and objectives.
              </p>
              <ButtonUnderline
                className="button"
                to="/services#socialmediainfluencing"
              >
                social media influencing &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                style={ImgStyle}
                src="../images/new-storm-doors-installation-calgary.jpg"
                alt="new storm doors installation calgary"
              />
              <h3 className="upper bold">web design & SEO</h3>
              <p>
                We work with our clients to develop and execute a strategic
                social media plan based on market research and your company’s
                unique goals and objectives.
              </p>
              <ButtonUnderline className="button" to="/services#webdesign">
                web design & SEO &#x2192;
              </ButtonUnderline>
            </Item>
          </GridThree>
          <div className="center spacing">
            <h3 className="italics caps">request a quote</h3>
            <p>
              Call us at{" "}
              <AnchorInline href="tel: 705-923-1199">
                (705) 923-1199
              </AnchorInline>{" "}
              or fill out our contact form to request a service or free estimate
              from us!
            </p>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </div>
        </div>
      </Container>
    </Section>
  )
}
