import React from 'react'

const style = `
  html  { background-color: #50E3C2;}
  body {
    color: #4A4A4A;
    background-color: #fff;
    padding: 2em 1em;
    margin:0px 0 6px;
    line-height: 1.6;
    font-size:20px;
    letter-spacing: 0.2px;
    min-height:100vh;
    font-family: -apple-system, BlinkMacSystemFont,
                 "avenir next", avenir,
                 helvetica, "helvetica neue",
                 ubuntu,
                 roboto, noto,
                 "segoe ui", arial,
                 sans-serif;
  }
  code {
    font-size: .875rem;
    font-family: Consolas, monaco, monospace;
  }
  a {
    color: #333;
  }
  a:hover {
    color: #319C84;
  }
  blockquote {
    color: #888;
    padding: .5rem 1.2rem;
    margin: 1rem 0;
    font-size: 1.1rem;
    border-left: .25rem solid #eceeef;
  }
  blockquote p:first-child {
    margin-top: 0.25rem;
  }
  blockquote p:last-child {
    margin-bottom: 0.25rem;
  }
  h1 { font-size: 3rem; }
  h2 { font-size: 2.25rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1rem; }
  h6 { font-size: .875rem; }
  img { max-width: 100%; }
  .m-b-1 {
    margin-bottom: 1rem !important;
  }
  .m-t-3 {
    margin-top: 3rem !important;
  }
  .max-width-md {
    max-width: 700px;
    margin:0 auto;
  }
  .text-decoration-none {
    text-decoration: none;
  }
  .tracked {
    letter-spacing: 0.5px;
  }
`

const Head = () => (
  <head>
    <meta charSet='utf-8' />
    <title>React ResponsiveEmbed</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <style dangerouslySetInnerHTML={{__html: style }} />
  </head>
)

export default Head