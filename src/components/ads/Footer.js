import React from "react"
import logo from "@images/logo.png"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "@emotion/css"
import tw from "tailwind.macro"
export default function Footer() {
  const {
    nav: { nodes: navigation },
    legal,
  } = useStaticQuery(graphql`
    {
      nav: allContentfulFooterNavigation(
        filter: {
          node_locale: { eq: "en-US" }
          website: { in: ["Compare Instant Loans"] }
          adsPage: { eq: true }
        }
      ) {
        nodes {
          firstColumn {
            slug
            navigationTitle
          }
          secondColumn {
            slug
            navigationTitle
          }
          thirdColumn {
            slug
            navigationTitle
          }
          fourthColumn {
            slug
            navigationTitle
          }
        }
      }
      legal: contentfulLegalContent(
        node_locale: { eq: "en-US" }
        website: { in: ["Compare Instant Loans"] }
      ) {
        footerLegalContent {
          md: childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  return (
    <div className="bg-brand-dark py-12">
      <div className="container  ">
        <div className="row justify-center">
          <div
            className="col w-full lg:w-1/5 text-center "
            css={css`
              a {
                ${tw`text-white font-titillium block font-normal mb-2 text-brand-gray-bg hover:text-white`}
              }
            `}
          >
            {navigation[0] && (
              <>
                {navigation[0].firstColumn &&
                  navigation[0].firstColumn.map((item) => (
                    <Link to={item.slug} key={item.slug}>
                      {item.navigationTitle}
                    </Link>
                  ))}
              </>
            )}
          </div>
          <div
            className="col w-full lg:w-1/5 text-center  "
            css={css`
              a {
                ${tw`text-white font-titillium block font-normal mb-2 text-brand-gray-bg hover:text-white`}
              }
            `}
          >
            {navigation[0] && (
              <>
                {navigation[0].secondColumn &&
                  navigation[0].secondColumn.map((item) => (
                    <Link to={item.slug} key={item.slug}>
                      {item.navigationTitle}
                    </Link>
                  ))}
              </>
            )}
          </div>
          <div
            className="col w-full lg:w-1/5 text-center  "
            css={css`
              a {
                ${tw`text-white font-titillium block font-normal  mb-2 text-brand-gray-bg hover:text-white`}
              }
            `}
          >
            {navigation[0] && (
              <>
                {navigation[0].thirdColumn &&
                  navigation[0].thirdColumn.map((item) => (
                    <Link to={item.slug} key={item.slug}>
                      {item.navigationTitle}
                    </Link>
                  ))}
              </>
            )}
          </div>
          <div
            className="col w-full lg:w-1/5 text-center  "
            css={css`
              a {
                ${tw`text-white font-titillium block font-normal mb-2 text-brand-gray-bg hover:text-white`}
              }
            `}
          >
            {navigation[0] && (
              <>
                {navigation[0].fourthColumn &&
                  navigation[0].fourthColumn.map((item) => (
                    <Link to={item.slug} key={item.slug}>
                      {item.navigationTitle}
                    </Link>
                  ))}
              </>
            )}
          </div>
        </div>
        <div
          css={css`
            background: #393939;
            p {
              ${tw`mb-0`}
            }
          `}
          className="p-6 mt-12 text-white text-sm"
          dangerouslySetInnerHTML={{ __html: legal.footerLegalContent.md.html }}
        ></div>
      </div>
    </div>
  )
}
