const reducer = (state, action)=>{

    switch(action.type){
        case "GET_STORIES":
            return {
                ...state, 
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
        
        case "SET_LOADING":
            return {
                ...state,
                isLoading : true
            }

        case "REMOVE_POST":
            return{
                ...state,
                hits : state.hits.filter(
                    (currElem)=> 
                        currElem.objectID !== action.payload
                ) 
            }
        
        case "SEARCH_QUERY":
            return{
                ...state,
                page: 0,
                query: action.payload
            }
        
        case "PREV_PAGE":
            let pageNum = state.page-1
            if(pageNum<=0){
                pageNum = 0
            }
            
            return{
                ...state,
                page: pageNum
            }

        case "NEXT_PAGE":
            let pageNumInc = state.page+1
            if(pageNumInc >= state.nbPages){
                pageNumInc = 0;
            }
            return{
                ...state,
                page: pageNumInc
            }
           
    }

    return state;
}

export default reducer;
