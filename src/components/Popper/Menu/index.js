import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { useState } from 'react'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)
const defaultFn = () => {}
function Menu({ children, items = [], onChange = defaultFn }) {
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
   return (
      <Tippy
         //  visible
         delay={[0, 700]}
         interactive
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>
                  {history.length > 1 && (
                     <Header
                        title="English"
                        onBack={() => {
                           setHistory((pver) => pver.slice(0, pver.length - 1))
                        }}
                     />
                  )}
                  {renderItems()}
               </PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   )
}

export default Menu