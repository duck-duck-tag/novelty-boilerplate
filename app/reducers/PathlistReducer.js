
const init  = process.env.NODE_ENV !== 'development' ? [] : [{"type":"url","path":"https://picsum.photos/id/256/200/200.jpg","selected":true,"id":"5915a917-25b602a31fd6"}]



const PathlistReducer = (state = init, action) => {

  if (action.type==='SET_PATHLIST') {
      return action.data
  }
 
  return state

}

export default PathlistReducer
