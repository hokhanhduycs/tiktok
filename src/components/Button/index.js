import className from 'classnames/bind'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

import styles from './Button.module.scss'
const cx = className.bind(styles)
function Button({
   to,
   href,
   primary = false,
   outline = false,
   text = false,
   rounded = false,
   disabled = false,
   small = false,
   large = false,
   children,
   className,
   leftIcon,
   rightIcon,
   onClick,
   ...passProps
}) {
   let Comp = 'button'
   const props = { onClick, ...passProps }
   //Delete event listener
   if (disabled) {
      //   delete props.onClick
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] == 'function') {
            delete props[key]
         }
      })
   }
   if (to) {
      props.to = to
      Comp = Link
   } else if (href) {
      props.href = href
      Comp = 'a'
   }
   const classes = cx('wrapper', {
      [className]: className,
      primary,
      outline,
      text,
      rounded,
      disabled,
      small,
      large,
   })
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   )
}

Button.propTypes = {
   // nhung phan tu co the render ra dc
   to: propTypes.string,
   href: propTypes.bool,
   primary: propTypes.bool,
   outline: propTypes.string,
   text: propTypes.bool,
   rounded: propTypes.bool,
   disabled: propTypes.bool,
   small: propTypes.bool,
   large: propTypes.string,
   children: propTypes.node.isRequired,
   className: propTypes.string,
   leftIcon: propTypes.node,
   rightIcon: propTypes.node,
   onClick: propTypes.func,
}
export default Button
