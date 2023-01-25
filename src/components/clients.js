import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, GridAuto, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-accent-lighter);
  color: var(--txt-light);
  padding: 2em;
`

export default function Clients() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing center">
          <div>
            <p className="body--large caps">trusted by</p>
            <h2 className="title upper bold">200+ businesses</h2>
            <p>
              Amazing things happen when you choose the right marketing company
            </p>
          </div>
          <GridAuto>
            <StaticImage
              src="../images/clients/adventure.png"
              alt="social media marketing sudbury client"
              height={150}
            />
          </GridAuto>
        </Container>
      </Section>
    </Wrapper>
  )
}
