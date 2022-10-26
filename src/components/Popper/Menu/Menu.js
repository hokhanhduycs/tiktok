import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { useState } from 'react'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import PropTypes from 'prop-types'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)
const defaultFn = () => {}
function Menu({
   children,
   items = [],
   hideOnClick = true,
   onChange = defaultFn,
}) {
   const [history, setHistory] = useState([{ data: items }])
   const current = history[history.length - 1]

   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((pver) => [...pver, item.children])
                  } else {
                     onChange(item)
                  }
               }}
            />
         )
      })
   }
   const handleBack = () => {
      setHistory((pver) => pver.slice(0, pver.length - 1))
   }
   const renderResult = (attrs) => (
      <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
         <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
               <Header title={current.title} onBack={handleBack} />
            )}
            <div className={cx('menu-body')}> {renderItems()}</div>
         </PopperWrapper>
      </div>
   )
   //Reset to first page
   const handleResetMenu = () => {
      setHistory((prev) => prev.slice(0, 1))
   }
   return (
      <Tippy
         // visible
         delay={[0, 700]}
         offset={[12, 8]}
         interactive
         placement="bottom-end"
         hideOnClick={hideOnClick}
         render={renderResult}
         onHide={handleResetMenu}
      >
         {children}
      </Tippy>
   )
}

Menu.propTypes = {
   children: PropTypes.node.isRequired,
   items: PropTypes.array,
   hideOnClick: PropTypes.bool,
   onChange: PropTypes.func,
}
export default Menu
