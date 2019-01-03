<template>
  <div v-if="selectedTodo">
    <todo-form 
      :todo="selectedTodo" 
      @processTodo="updateTodo"
      todoSubmit="Actualizar Todo"></todo-form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import TodoForm from '@/components/TodoForm'

export default {
  components: {
    TodoForm
  },
  mounted () {
    const id = this.$route.params.id
    this._fetchTodo(id)

  },
  computed: {
    ...mapState('todos', ['selectedTodo'])
  },
  methods: {
    ...mapActions({
      _updateTodo: 'todos/updateTodo',
      _fetchTodo: 'todos/fetchTodo'
    }),
    updateTodo (todo) {
      console.log('Añadir Todo', todo);
      this._updateTodo(todo)
        .then(() => {
          this.$router.push('/todos')
        })
    }
  }
}
</script>

