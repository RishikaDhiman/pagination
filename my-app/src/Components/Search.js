import React, { useContext } from 'react'
import { AppContext } from './Context'
import './Search.css'

const Search = () => {

  const {query, searchPost} = useContext(AppContext);
   
  return (
    <div className='search-container'>
      <h1>SEARCH TECH NEWS HERE</h1>
      <form>
        <input type="text" placeholder='Search here'
        value= {query} onChange={(e)=> searchPost(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
