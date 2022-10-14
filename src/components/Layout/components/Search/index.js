import { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountsItem from '~/components/Layout/AccountsItem'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

function Search() {
   const [searchValue, setSearchValue] = useState('')
   const [searchResult, setSearchResult] = useState([])
   const [showRusult, setShowRusult] = useState(true)
   const [loading, setLoading] = useState(false)

   const inputRef = useRef()

   useEffect(() => {
      if (!searchValue.trim()) {
         setSearchResult([])
         return
      }
      setLoading(true)
      fetch(
         `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
            searchValue
         )}&type=less`
      )
         .then((res) => res.json())
         .then((res) => {
            setSearchResult(res.data)
            setLoading(false)
         })
         .catch(() => {
            setLoading(false)
         })
   }, [searchValue])

   const handleClear = () => {
      setSearchValue('')
      inputRef.current.focus()
   }
   const handleHideResult = () => {
      setShowRusult(false)
   }
   return (
      <HeadlessTippy
         visible={showRusult && searchResult.length > 0}
         interactive
         onClickOutside={handleHideResult}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  {searchResult.map((result) => (
                     <AccountsItem key={result.id} data={result} />
                  ))}
               </PopperWrapper>
            </div>
         )}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               value={searchValue}
               placeholder="Search account and video"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowRusult(true)}
            />
            {!!searchValue && !loading && (
               <button className={cx('clear')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {loading && (
               <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            )}

            <button className={cx('search-btn')}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   )
}

export default Search
