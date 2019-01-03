export function setTodos (state, todos) {
    state.todos = todos
}

export function setTodo (state, todo) {
    state.selectedTodo = todo
}

export function updateTodoStatus (state, payload) {
    const todo = state.todos.find(t => t.id === payload.id)
    if (todo) {
        todo.done = !todo.done
    }
}

export function todosError (state, payload) {
    state.error = true,
    state.errorMessage = payload
    state.todos = []
}