import React, { useContext, useEffect } from 'react'
import { AppContext } from './Context';
import './Stories.css';

const Stories = () => {

  const {hits, isLoading, removePost} = useContext(AppContext);

  if(isLoading){
    return <h1 className='load'>Loading...</h1>
  }

  return (
    <div className='card-container'>
      {
        hits.map((currElem)=>{
          const {title, author, objectID
            , url, num_comments}= currElem;
          return(
            
            <div className='card' key={objectID}> 
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> Comments
              </p>
              <div className='card-button'>
                <a href={url} target="_blank">
                  Read More
                </a>
                <a href='#' onClick={()=>removePost(objectID)}>Remove</a>
              </div>
            </div>
            
          )
        })
      }
    </div>
  )
}

export default Stories
