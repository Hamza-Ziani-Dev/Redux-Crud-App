import { DECREMENT, INCREMENT } from "./Types"


export const ActionIncrement = (dispatch) =>{ 
  return dispatch({
    type: INCREMENT
  })
}

export const ActionDecrement = (dispatch) =>{ 
  return dispatch({
    type: DECREMENT
  })
}
