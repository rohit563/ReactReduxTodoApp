let todoID = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: todoID++,
    text
  }
}
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
})
