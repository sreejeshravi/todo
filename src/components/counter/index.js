import { connect } from 'react-redux'

import * as React from 'react';

import { toDoAction } from '../Redux';

// export  * from './counter.component';
// import * as Counter from './counter.component'

function Counter(props) {
  return (
    <div>
      <p className='ui-counter__title'>Counter Widget</p>
      <h2>Todo Counter - {props.todoCounter} </h2>
      <button onClick={() => { props.toDoAction, console.log(props, 'counterssss') }}>Add Count</button>
    </div>
  )
}


export const mapStateToProps = state => {
  return {
    todoCounter: state.todoCounter
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    toDoAction: () => {
      console.log('todo asddd')
      dispatch(toDoAction())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)