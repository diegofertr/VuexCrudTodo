import Vue from 'vue'

export async function fetchTodos ({commit}) {
	try {
		const { data } = await Vue.axios({
			url: '/todos'
		})
		// commit('todos/setTodos', data, { root: true })
		commit('setTodos', data)
	} catch (e) {
		// commit('todos/error', e.message)
		commit('todosError', e.message)
	} finally {
		console.log('La petición para obtener los todos ha finalizado.')
	}
}

export async function fetchTodo ({commit}, id) {
	try {
		const { data } = await Vue.axios({
			method: 'GET',
			url: `/todos/${id}`
		})
		commit('setTodo', data)
	} catch (e) {
		commit('todosError', e.message);
	} finally {
		console.log('La petición para obtener el todo ha finalizado');
	}
}

export async function addTodo ({commit}, todo) {
	try {
		await Vue.axios({
			method: 'POST',
			url: '/todos',
			data: {
				id: Date.now(),
				text: todo.text,
				done: false
			}
		})
	} catch (e) {
		commit('todosError', e.message)
	} finally {
		console.log('La petición para crear el todo ha finalizado.');
	}
}

export async function updateTodo ({commit}, todo) {
	try {
		await Vue.axios({
			method: 'PUT',
			url: `/todos/${todo.id}`,
			data: {
				id: todo.id,
				text: todo.text,
				done: todo.done
			}
		})
	} catch (e) {
		commit('todosError', e.message)
	} finally {
		console.log('La petición para actualizar el todo ha finalizado.');
	}
}

export async function updateTodoStatus ({commit, dispatch}, todo) {
	try {
		await Vue.axios({
			method: 'PUT',
			url: `/todos/${todo.id}`,
			data: {
				id: todo.id,
				text: todo.text,
				done: !todo.done
			}
		})
		dispatch('fetchTodos')
	} catch (e) {
		commit('todosError', e.message)
	} finally {
		console.log('La petición para actualizar el estado del todo ha finalizado.');
	}
}

export async function removeTodo ({commit, dispatch}, id) {
	try {
		await Vue.axios({
			method: 'DELETE',
			url: `/todos/${id}`
		})
		// dispatch se ejecuta para ejecutar otra accion
		dispatch('fetchTodos')
	} catch (e) {
		commit('todosError', e.message)
	} finally {
		console.log('La petición para eliminar el todo ha finalizado.');
	}
}