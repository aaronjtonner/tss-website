import React from "react"
import styled from "styled-components"
import { Container } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import { StaticImage } from "gatsby-plugin-image"
import HeroImg from "../../images/hero-circles-tss.svg"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
`

const Bg = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  background: url("../../images/tss-hero-1.jpg") rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1000;
`

const Top = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  color: var(--txt-light);
  padding: 4em 0 4em 0;
  justify-self: center;
  text-align: center;

  h2 {
    padding-top: 4em;
  }

  h2,
  p {
    max-width: 70ch;
  }

  p {
    color: var(--txt-light-secondary);
  }
`

const Bottom = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  justify-self: center;
`

// banner with only 2 links in the breadcrumb
export default function HeroGrid(props) {
  return (
    <Wrapper>
      <Bg />
      <Top>
        <Container className="spacing">
          <h2 className="title caps bold">
            <span className="italics">elevating</span>{" "}
            <span className="accent">your brand to new heights</span>
          </h2>
          <p>Your new secret weapon to level up your marketing.</p>
          <ButtonPrimary to="/contact">
            get your free marketing estimate
          </ButtonPrimary>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <img src={HeroImg} alt="tss" />
        </Container>
      </Bottom>
    </Wrapper>
  )
}
