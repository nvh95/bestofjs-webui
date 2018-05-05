const React = require('react')
const { renderToString } = require('react-dom/server')
const prettyBytes = require('pretty-bytes')
const { ServerStyleSheet } = require('styled-components')

// The following `main.js` file has been generated by `ssr-step1` script
const App = require('../../ssr-temp/static/ssr/main').default

function renderApp({ location, store }) {
  const sheet = new ServerStyleSheet()
  const appHtml = renderToString(
    sheet.collectStyles(React.createElement(App, { location, store, sheet }))
  )
  const styles = sheet.getStyleTags()
  console.log(
    `${location} rendered`,
    prettyBytes(appHtml.length),
    prettyBytes(styles.length)
  )
  return { appHtml, styles }
}

module.exports = renderApp
