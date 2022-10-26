import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import {
   HomeIcon,
   HomeActiveIcon,
   UserGoundIcon,
   UserGoundActiveIcon,
   LiveIcon,
   LiveActiveIcon,
} from '~/components/Icons'

const cx = classNames.bind(styles)
function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem
               title="For You"
               to={config.routes.home}
               icon={<HomeIcon />}
               activeIcon={<HomeActiveIcon />}
            />

            <MenuItem
               title="Following"
               to={config.routes.following}
               icon={<UserGoundIcon />}
               activeIcon={<UserGoundActiveIcon />}
            />

            <MenuItem
               title="LIVE"
               to={config.routes.live}
               icon={<LiveIcon />}
               activeIcon={<LiveActiveIcon />}
            />
         </Menu>
      </aside>
   )
}

export default Sidebar
