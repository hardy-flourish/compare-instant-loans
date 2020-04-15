import React from "react"

import { graphql } from "gatsby"
import Layout from "@components/ads/Layout"
import Hero from "@components/ads/Hero"
import ValueExplainer from "@components/ads/ValueExplainer"
import CommonQuestions from "@components/ads/CommonQuestions"
import ContentComponent from "@components/ads/Content"

export default function Page({ data: { heroData, VE, QA, Content } }) {
  return (
    <Layout>
      {heroData.hasAHeroBanner && <Hero data={heroData}></Hero>}
      {VE.hasAValueExplainer && <ValueExplainer></ValueExplainer>}
      {QA.commonQuestions && (
        <CommonQuestions data={QA.commonQuestions}></CommonQuestions>
      )}
      {Content.main.md.html.length > 0 && (
        <ContentComponent data={Content}></ContentComponent>
      )}
    </Layout>
  )
}
export const query = graphql`
  query {
    heroData: contentfulPage(
      node_locale: { eq: "en-US" }
      website: { in: ["Compare Instant Loans"] }
      slug: { eq: "instant-loans-In-the-uk" }
    ) {
      hasAHeroBanner
      heroBannerImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      mainHeadline
      subHeadline
      defaultLoanAmount
      maxLoanAmount
      minLoanAmount
    }
    VE: contentfulPage(
      node_locale: { eq: "en-US" }
      website: { in: ["Compare Instant Loans"] }
      slug: { eq: "instant-loans-In-the-uk" }
    ) {
      hasAValueExplainer
    }
    QA: contentfulPage(
      node_locale: { eq: "en-US" }
      website: { in: ["Compare Instant Loans"] }
      slug: { eq: "instant-loans-In-the-uk" }
    ) {
      commonQuestions {
        question
        answer {
          md: childMarkdownRemark {
            html
          }
        }
      }
    }
    Content: contentfulPage(
      node_locale: { eq: "en-US" }
      website: { in: ["Compare Instant Loans"] }
      slug: { eq: "instant-loans-In-the-uk" }
    ) {
      main: mainContentSection {
        md: childMarkdownRemark {
          html
        }
      }
    }
  }
`
