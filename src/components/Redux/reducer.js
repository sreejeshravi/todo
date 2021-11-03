// import { useState } from 'react'
// import {combineReducers} from 'redux'
// const [initialState,setInitialState]=useState(0)
// const postsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "Add":
//             {setInitialState(initialState+1)
//             return (initialState)}
//             case "Subtract":
//             {setInitialState(initialState-1)
//             return (initialState)}
//         default: return state
//     }
// }


// export default rootReducer;



const initialState = {
  todoCounter: 10
}

const ToDoReducer = (state = initialState, action) => {
    console.log(action,'   act');
    
  switch (action.type) {
    case 'Add': return {
      todoCounter: 100
    }

    default: return state
  }
}

export default ToDoReducer