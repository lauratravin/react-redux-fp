export const fetchCats = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS'})
      fetch('http://127.0.0.1:3000/cats').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'FETCH_CATS', cats: responseJSON })
      })
    }
  }


  