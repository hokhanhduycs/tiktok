import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   // faSignIn,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'

import Menu from '~/components/Popper/Menu'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountsItem from '~/components/Layout/AccountsItem'
import Button from '~/components/Button'

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vn',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'FeedBack and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
]

const cx = classNames.bind(styles)
function Header() {
   const [searchResult, setSearchResult] = useState([])
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([])
      }, 0)
   }, [])
   // handle logic
   const handleMenuChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            //handle change languge
            console.log(menuItem)
            break
         default:
      }
   }
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="tiktok" />

            <Tippy
               visible={searchResult.length > 0}
               interactive
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountsItem />
                        <AccountsItem />
                        <AccountsItem />
                        <AccountsItem />
                        <AccountsItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Search account and video" spellCheck={false} />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>

            <div className={cx('action')}>
               <Button text>Upload</Button>
               <Button primary>Log in</Button>
               {/* <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                  Log in
               </Button> */}
               <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                  <button className={cx('more-btn')}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </Menu>
            </div>
         </div>
      </header>
   )
}

export default Header
