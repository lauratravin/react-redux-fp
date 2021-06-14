
const catsReducer = (state = { cats: [], loading: false }, action) => {
 
    // console.log("reducer",state)
    // console.log("action", action)
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
          debugger
        return {
          ...state,
          cats: [...state.cats, action.cat]
        }

      case 'ADD_COMMET':
            const comment = { text: action.comment.text, catId: action.comment.catId };
            return { ...state,
             comments: [...state.comments, comment]
            }
        
      case 'DELETE_COMMET':
            const comment_del = state.comment.filter(comment => comment.id !== action.id);
            return {...state, comment_del } 
      default:
        return state;
    }
  }
  
  export default catsReducer;