import PropTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(
   (
      {
         alt,
         className,
         fallback: currentFallback = images.noImage,
         src,
         ...props
      },
      ref
   ) => {
      const [fallback, setFallback] = useState('')
      const handleError = () => {
         setFallback(currentFallback)
      }

      return (
         <img
            className={(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
         />
      )
   }
)

Image.propTypes = {
   alt: PropTypes.string,
   className: PropTypes.string,
   fallback: PropTypes.string,
   src: PropTypes.string,
}
export default Image
