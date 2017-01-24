const React = require('react')
const PropTypes = React.PropTypes

/*
 * Turns a ratio into a percentage
 * Turns `16:9` into `9 / 16` into `56.25%`
 * Turns `4:3` into `3 / 4` into `75%`
 */
const ratioToPercent = (ratio) => {
  const [w, h] = ratio.split(':').map((num) => Number(num))
  return `${(h / w) * 100}%`
}

/*
 * Usage:
 *   <ResponsiveEmbed ratio='4:3'>
 *     <iframe src='ace youtube video' />
 *   </ResponsiveEmbed>
 */
const ResponsiveEmbed = ({ratio, style, children, ...props}) => {
  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '100%',
    height: 0,
    paddingBottom: ratioToPercent(ratio),
    ...style
  }
  return React.createElement('div', {style: containerStyle, ...props},
    React.cloneElement(children, {frameBorder: 0, style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }})
  )
}

ResponsiveEmbed.defaultProps = {
  ratio: '16:9'
}

ResponsiveEmbed.propTypes = {
  children: PropTypes.element.isRequired,
  ratio: (props, propName, componentName) => {
    if (!/\d+:\d+/.test(props[propName])) {
      return new Error(
        'Invalid ratio supplied to ResponsiveEmbed. Expected a string like "16:9" or any 2 numbers seperated by a colon'
      )
    }
  }
}

module.exports = ResponsiveEmbed
