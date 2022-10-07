import Header from './Header'

function HeaderOnly({ children }) {
   return (
      <>
         <Header />
         <div className="container">
            <div className="content">{children}</div>
         </div>
      </>
   )
}

export default HeaderOnly
