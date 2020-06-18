import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import css from "@emotion/css"
import tw from "tailwind.macro"
import Image from "gatsby-image"
import Cta from "@components/ads/Cta"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
export default function ValueExplainer() {
  const { ValueExplainer } = useStaticQuery(graphql`
    {
      ValueExplainer: contentfulValueExplainer(
        website: { in: ["Compare Instant Loans"] }
      ) {
        headline
        firstSectionTitle
        firstSectionContent
        firstSectionImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        secondSectionTitle
        secondSectionContent
        secondSectionImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        thirdSectionTitle
        thirdSectionContent
        thirdSectionImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { dots: true, slidesToShow: 1.1 },
      },
    ],
  }
  return (
    <div>
      <div className="container py-16 lg:py-20">
        <div className="text-center  ">
          <Cta className="h-20 px-12" />
        </div>
      </div>
    </div>
  )
}
