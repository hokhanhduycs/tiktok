import { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import request from '~/utils/request'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountsItem from '~/components/Layout/AccountsItem'
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

function Search() {
   const [searchValue, setSearchValue] = useState('')
   const [searchResult, setSearchResult] = useState([])
   const [showRusult, setShowRusult] = useState(true)
   const [loading, setLoading] = useState(false)

   const debounced = useDebounce(searchValue, 500)

   const inputRef = useRef()

   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([])
         return
      }
      setLoading(true)
      request
         .get('users/search', {
            params: {
               q: debounced,
               type: 'less',
            },
         })
         .then((res) => {
            setSearchResult(res.data.data)
            setLoading(false)
         })
         .catch(() => {
            setLoading(false)
         })
   }, [debounced])

   const handleClear = () => {
      setSearchValue('')
      inputRef.current.focus()
   }
   const handleHideResult = () => {
      setShowRusult(false)
   }
   const handleChange = (e) => {
      const searchValue = e.target.value
      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue)
      }
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
               onChange={handleChange}
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

            <button
               className={cx('search-btn')}
               onMouseDown={(e) => e.preventDefault()}
            >
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   )
}

export default Search
