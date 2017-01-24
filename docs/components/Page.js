import React from 'react'
import ResponsiveEmbed from '../../src/index'
import Head from './head'

const Page = () => (
  <html>
    <Head />
    <body>
      <div style={{maxWidth: 800, margin: '0 auto'}}>
        <header className='m-b-1'>
          <a className='tracked text-decoration-none' href='https://tableflip.io'>
            <img src='https://tableflip.io/img/tableflip.min.svg' style={{width:38, verticalAlign:'-14px'}} />
            <strong>TABLEFLIP</strong>
          </a>
        </header>
        <h1>
          <a href='https://github.com/tableflip/react-responsive-embed'>React ResponsiveEmbed</a>
        </h1>
        <p>
          You want to embed a YouTube or other `iframe` style embedded content, and you'd
          like it to take up the available width, and retain it's aspect ratio.
        </p>
        <p>
          Much like the <a href='https://v4-alpha.getbootstrap.com/utilities/responsive-helpers/' target='_blank'>Bootstrap responsive embed helpers</a> of old, but for react.
        </p>
        <code className='m-t-3' style={{color: '#FEFEFE', background: '#4A4A4A', padding: 20, display:'block'}}>
          &lt;ResponsiveEmbed ratio='16:9'&gt;
          <br/>&nbsp;&nbsp;&lt;iframe src='https://www.youtube.com/embed/2yqz9zgoC-U' /&gt;
          <br/>&lt;/ResponsiveEmbed&gt;
        </code>
        <ResponsiveEmbed ratio='16:9'>
          <iframe src='https://www.youtube.com/embed/2yqz9zgoC-U' />
        </ResponsiveEmbed>
        <code className='m-t-3' style={{color: '#FEFEFE', background: '#4A4A4A', padding: 20, display:'block'}}>
          &lt;ResponsiveEmbed ratio='4:3'&gt;
          <br/>&nbsp;&nbsp;&lt;iframe src='https://www.youtube.com/embed/mM5_T-F1Yn4' /&gt;
          <br/>&lt;/ResponsiveEmbed&gt;
        </code>
        <ResponsiveEmbed ratio='4:3'>
          <iframe src='https://www.youtube.com/embed/mM5_T-F1Yn4' />
        </ResponsiveEmbed>
        <p className='m-t-3'>
          <a href='https://github.com/tableflip/react-responsive-embed'>https://github.com/tableflip/react-responsive-embed</a>
        </p>
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