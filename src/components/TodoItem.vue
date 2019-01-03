<template>
  <div>

  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      _updateTodoStatus: 'todos/updateTodoStatus',
      _removeTodo: 'todos/removeTodo'
    }),
    ...mapMutations('todos', ['setTodo']),
    goToUpdateTodo (todo) {
      this.setTodo(todo)
      this.$router.push({
        name: 'todos-update',
        params: {
          id: todo.id
        }
      })
    },
    updateTodoStatus (todo) {
      this._updateTodoStatus(todo)
    },
    removeTodo (id) {
      this._removeTodo(id)
    }
  }
}
</script>

