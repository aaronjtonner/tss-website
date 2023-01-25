import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, GridThree, Section } from "./layoutComponents"

import Mikayla from "../images/team/mikayla-headshot.jpg"
import Daniela from "../images/team/daniela-headshot.jpg"
import Hailey from "../images/team/hailey-headshot.jpg"
import { AnchorInline, ButtonInline } from "./buttons"

const TeamWrapper = styled.div`
  background: url("../../images/tss-logo.svg"), rgba(255, 255, 255, 0.97);
  background-blend-mode: overlay;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const Flex = styled.div`
  display: grid;
  place-items: center;
`

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .headshot-img-mobile,
  .headshot-img-desktop {
    // clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    border: 2px solid var(--clr-accent);
    border-radius: 100000px;
    height: 300px;
    box-shadow: var(--shadow-light-accent);
    object-fit: cover;
    object-position: top;
  }
  // .headshot-img-mobile {
  //   display: none;
  //   @media screen and (max-width: 48em) {
  //     display: block;
  //   }
  // }
  // .headshot-img-desktop {
  //   @media screen and (max-width: 48em) {
  //     display: none;

  //     .headshot-img-mobile {
  //       display: block;
  //     }
  //   }
  // }
`

const Text = styled.div`
  text-align: center;
  h4 {
    color: var(--txt-dark-secondary);
    margin-top: 0;
  }

  p {
    max-width: 70ch;
    width: 100%;
  }

  @media screen and (max-width: 48em) {
    text-align: center;
  }
`

const TeamMember = props => {
  return (
    <Wrapper>
      <Flex className="spacing">
        <img className="headshot-img-desktop" src={props.img} alt={props.alt} />
        <Text>
          <div>
            <h3 className="headline accent">{props.name}</h3>
            <h4 className=" upper bold">{props.role}</h4>
          </div>
          <p>{props.description}</p>
        </Text>
      </Flex>
    </Wrapper>
  )
}

export default function TeamCondensed() {
  return (
    <TeamWrapper>
      <Section>
        <Container className="spacing-md">
          <div>
            <h2 className="title upper center">
              <span className="italics">meet the </span>
              <span className="accent">TSS</span>{" "}
              <span className="italics">marketing team!</span>
            </h2>
          </div>
          <GridThree>
            <TeamMember
              img={Hailey}
              alt="Hailey Hastie Sudbury digital marketer headshot"
              name="Hailey Hastie"
              role="CEO, Chief Marketing Coordinator"
              description="In 2018, while in her second year of
university Hailey begun The Social Soulpreneur as a
“
side hustle
”
project
-
offering social media
management services to local businesses. In 2019, Hailey was able to incorporate
her company
and make The Social Soulpreneur her full time career. Upon graduating in 2020
-
in the midst of
a global pandemic
-
Hailey hired her first employee of The Social Soulpreneur and opened the
doors to their current office Studio space
in Sudbury
.
Since then
,
The Social Soulpreneur has
developed into a full
-
service Marketing Studio
and
Social Media Agency
serving clients across
Canada
.
Hailey is proud to staff a
fully female
team of 3 full time employees. In 2021 Hailey was
awarded the Bell Business Excellence Young Entrepreneur of the Year award.
Hailey’s greatest
accomplishment in life came in
June of 2022
giving birth alongside her husband to their
daughter, Indiana."
            />
            <TeamMember
              img={Mikayla}
              alt="Mikayla - Sudbury Social Media Manager"
              name="Mikayla Desrosiers"
              role="Social Media Manager"
              description="After her discovery of TSS, Mikayla was quickly
              intrigued by their motto, their vision, and the company culture. Seeing as this was the first
              time she heard about
              working in social media as a career, she knew she had to test the waters
              out to see if this was the right fit for her. This led to Mikayla applying at TSS for her co-op.
              During this time, she learnt a considerable amount about marketing, social media, and
              how
              truly amazing The Social Soulpreneur team is.
              Considering that Mikayla is someone who craves creativity in almost anything that she does, as
              well as someone who loves to help others, this career choice is a dream for her. And she
              couldn’t be more than
              kful for how this opportunity worked out. Mikayla went from a confused
              college student to a full
              -
              time employed social media assistant
              -
              major glow up.
              As a member of Team TSS, Mikayla is always working to further her skills and knowledge, and of
              course
              coming up with new and creative ways to continue to create meaningful content for
              clients."
            />
            <TeamMember
              img={Daniela}
              alt="Daniela Valle - Sudbury Marketing Strategist, Sudbury Digital Ad Analyst"
              name="Daniela Valle"
              role="Marketing Strategist, Digital Ad Analyst"
              description="When Daniela met
              Hailey
              in her
              marketing class at Laurentian, they instantly became friends and knew they would work so well together. With
              the same passions in mind, Daniela and
              Hailey
              continue to help each other thrive in business, and in 2020 she
              joined The Social Soulpreneur. Her favourite thing about working in marketing and social media is the diversity.
              Every client has a different brand, vision, and goal
              –
              allowing her job to be
              just as unique!
              Since joining The Social Soulpreneur, Daniela has expanded her skill set and grown as a marketer. Not only does
              she create engaging content for clients, but she also develops strategic marketing and brand work, manages and
              creates digital ads, and more!
              She is very excited to keep helping clients grow their businesses and reach their marketing goals!"
            />
          </GridThree>
        </Container>
      </Section>
    </TeamWrapper>
  )
}