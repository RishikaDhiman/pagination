// context-api
// context creation
// provider
// consumer - removed by useContext hook
import React, { useEffect, useReducer } from 'react'
import reducer from './Reducer';

let API = "https://hn.algolia.com/api/v1/search?";

let intialState = {
    isLoading: true,
    query : "HTML",
    nbPages : 0,
    page : 0,
    hits : [],
}

const AppContext = React.createContext();

// to create a provider function
const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, intialState);

    const fetchApiData = async(url)=>{

        dispatch({type: "SET_LOADING"})

        try{
            const res = await fetch(url);

            // to make system read the response
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES", 
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            });
           
        }
        catch(error){
            console.log(error);
        }
    };

    const removePost =(post_id)=>{
        console.log(post_id)
        dispatch({type: "REMOVE_POST", payload: post_id})
        console.log(state.hits);
    }

    const searchPost =(searchQuery)=>{
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery
        })
    }

    const getPrevPage = ()=>{
        dispatch({
            type: "PREV_PAGE"
        })
    }

    const getNextPage = ()=>{
        dispatch({
            type: "NEXT_PAGE"
        })
    }

    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query, state.page]);

    
    return (
        <AppContext.Provider value={{...state, removePost, searchPost, getPrevPage, getNextPage}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};

