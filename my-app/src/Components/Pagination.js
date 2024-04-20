import React, { useContext } from 'react'
import { AppContext } from './Context'
import './Pagination.css'

const Pagination = () => {

    const {page, nbPages, getPrevPage, getNextPage} = useContext(AppContext);

  return (
    <>
      <div className='pagination-container'>

        <a onClick={()=>getPrevPage()} class="btn">PREV</a>

        <p>
            {page+1} of {nbPages}
        </p>

        <a onClick={()=>getNextPage()} className="btn">NEXT</a>
      </div>
    </>
  )
}

export default Pagination
