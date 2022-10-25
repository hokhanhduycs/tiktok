import React from 'react'
import propTypes from 'prop-types'
import './GlobalStyle.scss'
function GlobalStyle({ children }) {
   return <>{children}</>
   // return React.Children.only(children)
}
GlobalStyle.propTypes = {
   children: propTypes.node.isRequired,
}
export default GlobalStyle
