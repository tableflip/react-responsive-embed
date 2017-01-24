import React from 'react'
import ResponsiveEmbed from '../../index'

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

const Page = () => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <title>React ResponsiveEmbed</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <style dangerouslySetInnerHTML={{__html: style }} />
    </head>
    <body>
      <div style={{maxWidth: 800, margin: '0 auto'}}>
        <header className='m-b-1'>
          <a className='tracked text-decoration-none' href='https://tableflip.io'>
            <img src='https://tableflip.io/img/tableflip.min.svg' style={{width:38, verticalAlign:'-14px'}} />
            <strong>TABLEFLIP</strong>
          </a>
        </header>
        <h1>React ResponsiveEmbed</h1>
        <p>
        You want to embed a YouTube or other `iframe` style embedded content, and you'd
        like it to take up the available width, and retain it's aspect ratio.
        </p>
        <p>
        Much like the <a href='https://v4-alpha.getbootstrap.com/utilities/responsive-helpers/' target='_blank'>Bootstrap responsive embed helpers</a> of old, but for react.
        </p>
        <pre style={{color: '#FEFEFE', background: '#4A4A4A', padding: 20}}>
          <code>
            &lt;ResponsiveEmbed ratio='16:9' src='https://www.youtube.com/embed/2yqz9zgoC-U' /&gt;
          </code>
        </pre>
        <ResponsiveEmbed ratio='16:9' src='https://www.youtube.com/embed/2yqz9zgoC-U' />
        <pre className='m-t-3' style={{color: '#FEFEFE', background: '#4A4A4A', padding: 20}}>
          <code>
            &lt;ResponsiveEmbed ratio='4:3' src='https://www.youtube.com/embed/mM5_T-F1Yn4' /&gt;
          </code>
        </pre>
        <ResponsiveEmbed ratio='4:3' src='https://www.youtube.com/embed/mM5_T-F1Yn4' />
        <footer className='m-t-3'>
          <a className='tracked text-decoration-none' href='https://tableflip.io'>
            <img src='https://tableflip.io/img/tableflip.min.svg' style={{width:38, verticalAlign:'-14px'}} />
            <strong>TABLEFLIP</strong>
          </a>
        </footer>
      </div>
    </body>
  </html>
)

export default Page