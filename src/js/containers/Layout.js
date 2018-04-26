import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from '../actions'
import update from 'immutability-helper';
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import '../../styles/style.scss'



const Layout = (props) => {
    return(
      <div>
        <TodoForm addTodo={props.addItem}/>
        <TodoList list={props.todoList} removeTodo={props.removeItem} handleCheckBoxChange={props.toggleItem}/>
      </div>
    )
}

const mapStateToProps = (state) => {
  console.log(state.todos);
  return {
    todoList: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatch");
  return {
    addItem: (text) => dispatch(addTodo(text)),
    toggleItem: (id) => dispatch(toggleTodo(id)),
    removeItem: (id) => dispatch(removeTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
