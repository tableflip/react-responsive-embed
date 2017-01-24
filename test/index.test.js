const test = require('ava')
const React = require('react')
const ReactTestUtils = require('react-addons-test-utils')
const ResponsiveEmbed = require('../src/index')

test('ResponsiveEmbed renders OK', (t) => {
  const src = 'https://www.youtube.com/embed/zc1g_hSuxVE'
  const background = 'hotpink'
  const className = 'whizzbang'
  const element = React.createElement(
    ResponsiveEmbed,
    {style: {background}, className},
    React.createElement('iframe', {src})
  )
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(element)
  const root = renderer.getRenderOutput()
  const child = root.props.children

  t.plan(6)
  t.is(root.type, 'div', 'Root element is a div')
  t.is(root.props.style.paddingBottom, '56.25%', 'Aspect ratio of 16x9 is manifest as a paddingBottom style of 56.25%')
  t.is(root.props.style.background, background, 'Custom styles are preserved')
  t.is(root.props.className, className, 'Custom className is preserved')
  t.is(child.type, 'iframe', 'Child element is an iframe')
  t.is(child.props.src, src, 'Provided `src` is used')
})

test('ResponsiveEmbed renders other ratios', (t) => {
  const src = 'https://www.youtube.com/embed/zc1g_hSuxVE'
  const ratio = '1.43:1' // imax
  const element = React.createElement(ResponsiveEmbed, {ratio},
    React.createElement('iframe', {src})
  )
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(element)
  const root = renderer.getRenderOutput()
  const child = root.props.children

  t.plan(4)
  t.is(root.type, 'div', 'Root element is a div')
  t.is(root.props.style.paddingBottom, '69.93006993006993%', 'IMAX aspect ratio is preserved')
  t.is(child.type, 'iframe', 'Child element is an iframe')
  t.is(child.props.src, src, 'Provided `src` is used')
})
