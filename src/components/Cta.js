import React from "react"
import { Link } from "gatsby"
import css from "@emotion/css"

import { trackCustomEvent } from "gatsby-plugin-google-analytics"
export default function Cta({ className, amount = 2000, term = 12 }) {
  return (
    <a
      href="/apply/"
      state={{ amount, term }}
      onClick={event => {
        event.preventDefault()
        trackCustomEvent({
          category: "Form",
          action: "Click to form",
          label: "Click to form",
        })
        window.open(event.target.href, "_self")
      }}
      css={css`
        box-shadow: -1px 4px 12px rgba(29, 32, 54, 0.35);
      `}
      className={
        "uppercase text-white inline-flex items-center justify-center bg-brand-green   tracking-wide  py-3 px-8 rounded-full    " +
        className
      }
    >
      {" "}
      Get Started
    </a>
  )
}
