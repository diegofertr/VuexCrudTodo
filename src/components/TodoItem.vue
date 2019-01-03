<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="2">{{ todo.text }}</b-col>
      <b-col cols="2">{{ todo.done }}</b-col>
      <b-col>
        <b-button
          variant="primary"
          @click="goToUpdateTodo">
          Editar
        </b-button>
        <b-button
          variant="warning"
          class="ml-2"
          @click="updateTodoStatus">
          Estado
        </b-button>
        <b-button
          variant="danger"
          class="ml-2"
          @click="removeTodo">
          Eliminar
        </b-button>
      </b-col>
    </b-row>
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
    goToUpdateTodo () {
      this.setTodo(this.todo)
      this.$router.push({
        name: 'todos-update',
        params: {
          id: this.todo.id
        }
      })
    },
    updateTodoStatus () {
      this._updateTodoStatus(this.todo)
    },
    removeTodo () {
      this._removeTodo(this.todo.id)
    }
  }
}
</script>

