import React from "react"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import FullServices from "../components/fullServices"
import AllReviews from "../components/reviews"
import FormContact from "../components/forms/formContact"
import FeaturedGallery from "../components/featuredGallery"
import SEO from "../components/seo"
import CTA from "../components/CTA"
import HeroGrid from "../components/heros/heroGrid"
import { Container, Section } from "../components/layoutComponents"
import { ButtonPrimary } from "../components/buttons"
import Clients from "../components/clients"
import BannerImg from "../images/hero-circles-full.svg"
import Banner from "../components/banners/bannerPrimary"

export default function Testimonials() {
  return (
    <Layout>
      <SEO title="Testimonials - " description="" />
      <Banner
        to1="/"
        link1="Home"
        to2="/services"
        link2="Services"
        title="our clients love us!"
        description="desc"
        img={BannerImg}
      />
    </Layout>
  )
}
