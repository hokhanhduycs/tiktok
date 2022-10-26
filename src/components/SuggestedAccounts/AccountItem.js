// import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
   return <div className={cx('account-item')}>AccountItem</div>
}
AccountItem.propTypes = {}
export default AccountItem
