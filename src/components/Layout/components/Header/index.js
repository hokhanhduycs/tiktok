import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faCloudUpload,
   faUser,
   faCoins,
   faGear,
   faSignOut,
   // faMessage,
   // faSignIn,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'

import 'tippy.js/dist/tippy.css'

import Menu from '~/components/Popper/Menu'
import styles from './Header.module.scss'
import images from '~/assets/images'

import Button from '~/components/Button'
// import { MessageIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '~/components/Layout/components/Search'

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

   const useMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/duy',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/logout',
         separate: true,
      },
   ]
   const currenUser = true
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="tiktok" />
            {/* Search */}
            <Search />
            <div className={cx('action')}>
               {currenUser ? (
                  <>
                     <Tippy
                        delay={[0, 100]}
                        content="Upload Video"
                        placement="bottom"
                     >
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faCloudUpload} />
                        </button>
                     </Tippy>

                     {/* <Tippy content="Message">
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faMessage} />
                           <MessageIcon/>
                        </button>
                     </Tippy> */}
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                     {/* <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                              Log in
                           </Button> */}
                  </>
               )}
               <Menu
                  items={currenUser ? useMenu : MENU_ITEMS}
                  onChange={handleMenuChange}
               >
                  {currenUser ? (
                     <Image
                        className={cx('user-avatar')}
                        alt=""
                        fallback="https://yt3.ggpht.com/yti/AJo0G0l3RVaTVcBxpJox1hEb3Rgi8gQubLNROnKgYwE9bg=s88-c-k-c0x00ffffff-no-rj-mo"
                        src="https://www.facebook.com/watch/?v=478336767557901&aggr_v_ids%5B0%5D=478336767557901&notif_id=1665650477065463&notif_t=watch_follower_video_explicit&ref=notif"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   )
}

export default Header
