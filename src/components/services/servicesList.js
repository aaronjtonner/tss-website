import React from "react"
import { Container, Flex, Section } from "../layoutComponents"
import { FaMousePointer } from "react-icons/fa"
import styled from "styled-components"

const device = {
  md: "48em",
}

const FlexList = styled.div`
  max-width: 700px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }

  ul {
    li {
      text-transform: uppercase;
      list-style-type: none;
    }
  }
`

const IconStyle = {
  color: "var(--clr-accent)",
  fontSize: "18px",
}

export default function ServicesList() {
  return (
    <Section>
      <Container className="spacing">
        <div className="text-center">
          <p className="upper body--small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            eaque.
          </p>
          <h2 className="upper">
            <span className="italics">what we can do for </span>
            <span className="accent">you.</span>
          </h2>
        </div>
        <FlexList>
          <ul>
            <li>
              <FaMousePointer style={IconStyle} />
              service <span className="accent">title</span>
            </li>
          </ul>
          <ul>
            <li>
              <FaMousePointer style={IconStyle} />
              service <span className="accent">title</span>
            </li>
          </ul>
          <ul>
            <li>
              <FaMousePointer style={IconStyle} />
              service <span className="accent">title</span>
            </li>
          </ul>
        </FlexList>
      </Container>
    </Section>
  )
}
