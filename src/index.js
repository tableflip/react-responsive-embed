const React = require('react')
const PropTypes = require('prop-types')
const div = React.createElement.bind(React, 'div')
const iframe = React.createElement.bind(React, 'iframe')

const divStyle = {
  position: 'relative',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%'
}

const iframeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
}

/*
 *  Turn `16:9` into `9 / 16` into `56.25%`
 *  Turn `4:3` into `3 / 4` into `75%`
 */
const ratioToPercent = (ratio) => {
  const [w, h] = ratio.split(':').map((num) => Number(num))
  return `${(h / w) * 100}%`
}

/*
 *  Usage: <ResponsiveEmbed src='ace youtube video' ratio='4:3' />
 */
const ResponsiveEmbed = (props) => {
  const paddingBottom = ratioToPercent(props.ratio)
  const style = Object.assign({}, divStyle, {paddingBottom})
  const iframeProps = Object.assign({frameBorder: 0}, props, {style: iframeStyle})
  delete iframeProps.ratio
  return div({style},
    iframe(iframeProps)
  )
}

ResponsiveEmbed.defaultProps = {
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  ratio: '16:9'
}

ResponsiveEmbed.propTypes = {
  src: PropTypes.string,
  ratio: (props, propName, componentName) => {
    if (!/\d+:\d+/.test(props[propName])) {
      return new Error(
        'Invalid ratio supplied to ResponsiveEmbed. Expected a string like "16:9" or any 2 numbers seperated by a colon'
      )
    }
  }
}

module.exports = ResponsiveEmbed
