import React from "react"
import styled from "styled-components"
import { FaStar, FaGoogle, FaQuoteLeft } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "./layoutComponents"
import Karen from "../images/karen-circle.png"
import Nicole from "../images/nicole-circle.png"
import Meghan from "../images/meghan-circle.jpg"
import Dr from "../images/drkam-circle.jpg"

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 42em) {
    flex-direction: column;
  }
  img {
    border-radius: 1000px;
    height: 150px;
    width: 150px;
    border: 1px solid var(--clr-accent);
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  & * + * {
    margin-left: 2px;
  }
`

const fontStyle = {
  color: "gold",
}

const QuoteStyle = {
  color: "var(--clr-accent-lighter)",
  opacity: "0.8",
  fontSize: "80px",
}

const ReviewText = styled.div`
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-bottom-accent);
`

const Name = styled.div`
  text-align: right;
`

const Review = props => {
  return (
    <Wrapper className="spacing">
      <img src={props.img} alt="social media marketing client review" />
      <ReviewText>
        <FaQuoteLeft style={QuoteStyle} />
        {/* <FlexStars>
          <FaStar style={fontStyle} />
          <FaStar style={fontStyle} />
          <FaStar style={fontStyle} />
          <FaStar style={fontStyle} />
          <FaStar style={fontStyle} />
        </FlexStars> */}
        <p className="italics bold">"{props.review}"</p>
        <Name>
          <p className="bold body--large caps accent">{props.name}</p>
          <p className="body--small caps">{props.company}</p>
        </Name>
      </ReviewText>
    </Wrapper>
  )
}

const AllReviews = () => {
  return (
    <Section>
      <Container className="spacing-lg">
        <Review
          img={Meghan}
          review="TSS IS MY SECRET WEAPON. The team at The Social Soulpreneur are in tune with my vision, and I never have to worry about what content is being posted. It's the best feeling opening up my phone and seeing the notifications of engagement when I haven't even touched a button! Their presence in my business means I can focus on my zone of genius, confidently knowing the team at TSS are taking care of my people and growing my audience.  Their reliability and flexibility are two of my favourite qualities; I always know they are on top of things and that they’re able to go with my creative flow. Often their ideas for growth and engagement are even better than my own! TSS’ commitment and dedication are so appreciated. If you've been worried about letting go of your business-baby and passing the reigns to someone else, The TSS team are the humans I trust. I am from-the-bottom-of-my-heart grateful to have them on my team!"
          name="meghan bonhomme"
          company="the self care queen"
        />
        <Review
          img={Dr}
          review="The Social Soulpreneur’s ability to bring forth my message into the community is truly unmatched! The team at TSS’ willingness to listen to my needs, goals and vision for my brand really sets them apart. Having them on my team releases so much of the constraints I have as a small business owner, which directly allows me to provide the service I love to provide. Their ability to listen to my vision, and to assit me in curating my message is something I am incredibly grateful for. Thank you TSS for bringing my purpose into the 21st century! "
          name="Dr. kamaldeep bansal"
          company="doctor of chiropractic"
        />
      </Container>
    </Section>
  )
}

export default AllReviews
