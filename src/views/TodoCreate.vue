<template>
  <div>
    <todo-form :todo="todo" @processTodo="addTodo"></todo-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import TodoForm from '@/components/TodoForm'

export default {
  components: {
    TodoForm
  },
  data () {
    return {
      todo: {
        id: null,
        texto: '',
        done: false
      }
    }
  },
  methods: {
    ...mapActions({
      createTodo: 'todos/addTodo'
    }),
    addTodo (todo) {
      console.log('Añadir Todo', todo);
      this.createTodo(todo)
        .then(() => {
          this.$router.push('/todos')
        })
    }
  }
}
</script>

