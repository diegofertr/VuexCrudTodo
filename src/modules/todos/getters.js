export function pending (state) {
    return state.todos.filter(todo => !todo.done)
}

export function done (state) {
    return state.todos.filter(todo => todo.done)
}