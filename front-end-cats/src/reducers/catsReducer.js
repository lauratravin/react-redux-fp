
const catsReducer = (state = { cats: [], loading: false }, action) => {
 
    //  console.log("reducer",state)
    //  console.log("action", action)
    switch(action.type) {
      case 'LOADING_CATS':
        return {
          ...state,
          cats: [...state.cats],
          loading: true
        }

      case 'FETCH_CATS':
        return {
            ...state,
            cats: action.cats,
            loading: false
          }

      case 'ADD_CAT':
        return {
          ...state,
          cats: [...state.cats, action.cat]
        }

     case 'ADD_COMMENT':
        let cat1 = state.cats.map(cat => {
            if (cat.id === action.cat.cat_id) {
                cat.comments = [...cat.comments, action.cat]
                return cat
            } else {
                return cat
            }
          })
        
          return { 
                ...state, 
                cats: cat1 
          }
     case 'DELETE_COMMENT': 
         { 
               console.log(action.data)
               let catId= action.data.cat
               let commentId= action.data.comment
               let cat1 = state.cats.map(cat => {
                    if (cat.id === catId) {
                      cat.comments = cat.comments.filter( comment => comment.id !== commentId )
                      return cat
                   } else {
                       return cat
                   }
               })
               return { 
                ...state, 
                cats: cat1 
          }
          }
    
    case 'VOTE_CAT':
        {
            console.log(action)
            let cats = state.cats.map( cat => {
                if ( cat.id === action.catId){
                    cat.likes+= 1
                    return cat
                } else {
                    return cat
                }
            })
            return {...state, cats: cats}
        }
        default:
            return state;
    }
  }
  
  export default catsReducer;