import Button from '~/components/Button'
import className from 'classnames/bind'
import styles from './Menu.module.scss'
const cx = className.bind(styles)
function MenuItem({ data }) {
   return (
      <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}>
         {data.title}
      </Button>
   )
}

export default MenuItem
