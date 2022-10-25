import className from 'classnames/bind'
import PropTypes from 'prop-types'

import Button from '~/components/Button'
import styles from './Menu.module.scss'
const cx = className.bind(styles)
function MenuItem({ data, onClick }) {
   const classes = cx('menu-item', {
      separate: data.separate,
   })
   return (
      <Button
         leftIcon={data.icon}
         to={data.to}
         className={classes}
         onClick={onClick}
      >
         {data.title}
      </Button>
   )
}
MenuItem.propTypes = {
   data: PropTypes.object.isRequired,
   onClick: PropTypes.func,
}
export default MenuItem
