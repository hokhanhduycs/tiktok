import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccountsItem.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)
function AccountsItem() {
   return (
      <div className={cx('wrapper')}>
         <Image
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/93038b3b09433f239a2ae7ecf1173786~c5_100x100.jpeg?x-expires=1665558000&x-signature=UKnD8fZguOQBKUaxbBca3Rd8luU%3D"
            alt="duy"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Ho Khanh Duy</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>hokhanhduycs</span>
         </div>
      </div>
   )
}

export default AccountsItem
