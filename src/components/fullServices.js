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
  height: "400px",
  border: "1px solid var(--clr-accent)",
}

export default function FullServices() {
  return (
    <Section>
      <Container className="spacing">
        <div className="spacing center">
          <div>
            <p className="body--small upper">
              need online exposure for your business?
            </p>
            <h2 className="title caps bold">
              <span className="italics">
                maximize your audience reach with our
              </span>{" "}
              <span className=" accent">digital marketing</span>{" "}
              <span className="italics">Services</span>
            </h2>
          </div>
        </div>
        <div className="spacing-lg">
          <GridThree>
            <Item className="spacing">
              <StaticImage
                style={ImgStyle}
                src="../images/social-media-management-sudbury.jpg"
                alt="social media management sudbury"
              />
              <h3 className="upper bold">logo and brand development</h3>
              <p>
                Whether you’re a new brand looking to stand out or ready to
                rebrand your business to become more current, our team of brand
                strategists and graphic designers will work with you to bring
                your vision to life.
              </p>
              <ButtonUnderline
                className="button"
                to="/services#socialmediamanagement"
              >
                logo and brand development &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                style={ImgStyle}
                src="../images/social-media-management-sudbury.jpg"
                alt="social media management sudbury"
              />
              <h3 className="upper bold">social media management</h3>
              <p>
                We work with our clients to develop and execute a strategic
                social media plan based on market research and your company’s
                unique goals and objectives. Our focus is on building your brand
                and promoting authenticity. We create content that is purposeful
                and more human and less sales-y and bombarding. Our mission is
                to help business owners effectively market their business and
                promote their brand through social media while engaging with
                their community in a humanized way.
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
                src="../images/sudbury-web-design.jpg"
                alt="sudbury web design"
              />
              <h3 className="upper bold">web design & SEO</h3>
              <p>
                We build conversion-optimized websites for our clients and we
                combine that with an competitive local SEO strategy for a
                long-term and sustainable lead generation machine for your
                business.
              </p>
              <ButtonUnderline className="button" to="/services#webdesign">
                web design & SEO &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                style={ImgStyle}
                src="../images/social-media-influencer-marketing-sudbury.jpg"
                alt="social media influencer marketing sudbury"
              />
              <h3 className="upper bold">influencer management</h3>
              <p>
                Influencer marketing is a type of social media marketing that
                uses endorsements and product mentions from
                influencers–individuals who have a dedicated social following
                and are viewed as experts within their niche. An influencer is
                defined as a user on social media who has established
                credibility or substantial interest within a specific industry
                or niche who can persuade others by virtue of their authenticity
                and reach. The number of followers does not indicate a level of
                influence, but it is based on interactions, engagement, and
                relationships. Studies have shown that consumers want
                authenticity from the brands they interact with. A recent stat
                shows that 90% of consumers trust peer recommendations while
                only 33% trust ads. Influencer marketing has been shown to
                deliver an 11X higher ROI than other digital media. In
                comparison to paid media, brands typically earn $2 for every $1
                spent on paid advertisements compared to $12 per every $1 spent
                on influencer marketing. By incorporating influencer marketing
                into your business’ marketing strategy is an effective way to
                humanize your brand and expose it to a greater niche of
                potential buyers.
              </p>
              <ButtonUnderline
                className="button"
                to="/services#socialmediainfluencing"
              >
                influencer management &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                style={ImgStyle}
                src="../images/social-media-influencer-marketing-sudbury.jpg"
                alt="social media influencer marketing sudbury"
              />
              <h3 className="upper bold">digital advertising</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                ea ab? Exercitationem magnam incidunt sed. At vitae itaque
                veritatis facere quam, placeat sapiente nobis eveniet harum
                ullam aspernatur iure sed, rem voluptatum dolor! Nesciunt id
                accusamus rem adipisci eos neque sint repudiandae tenetur alias
                cum totam quaerat dolor fugiat illum dolorum, quas dolores
                architecto commodi ad. Voluptas pariatur enim totam temporibus
                deleniti accusamus, quibusdam distinctio, repellendus neque
                quasi minima consequuntur quaerat tenetur sit quam. Doloremque
                sapiente quis beatae soluta reprehenderit quidem eveniet
                tempore, maxime dignissimos error deleniti numquam officia neque
                sed quo quos laudantium culpa, quibusdam ullam aliquam, ducimus
                provident.
              </p>
              <ButtonUnderline
                className="button"
                to="/services#socialmediainfluencing"
              >
                digital advertising &#x2192;
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
              or fill out our contact form and a team member will reach out!
            </p>
            <ButtonPrimary to="/contact">contact us</ButtonPrimary>
          </div>
        </div>
      </Container>
    </Section>
  )
}
