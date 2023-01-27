import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import SEO from "../components/seo"
import BannerContact from "../components/banners/bannerContact"
import BannerImg from "../images/hero-circles-full.svg"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact Us" description="" />
      <BannerContact
        to1="/"
        link1="Home"
        to2="/contact"
        link2="Contact"
        title="get in touch with us or book your consultation"
        img={BannerImg}
      />
      <FormContact title="get in touch with us using the form below" />
    </Layout>
  )
}
