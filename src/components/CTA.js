import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonPrimary } from "./buttons"
import { Actions, Container, Flex, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: url("../../images/cta-background.jpg") rgba(0, 0, 0, 0.9);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Text = styled.div`
  color: var(--txt-light);

  .cta-description {
    color: var(--txt-light-secondary);
  }
`

export default function CTA(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <Text className="spacing">
              <div>
                <p className="italics caps">{props.subtitle}</p>
                <h3 className="title bold accent">{props.title}</h3>
              </div>
              <p className="cta-description body--small">{props.description}</p>
              <Actions>
                <ButtonPrimary to="/contact">book online</ButtonPrimary>
                <AnchorInline className="bold italics" href="tel: 705-923-1199">
                  <span className="light">Or Call Us:</span> <br />
                  (705) 923-1199
                </AnchorInline>
              </Actions>
            </Text>
            <StaticImage
              src="../images/cta-cirlces.svg"
              alt="call now to get your quote"
              height={100}
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
