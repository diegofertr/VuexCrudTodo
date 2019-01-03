<template>
  <div class="mt-5">
    <b-row>
      <b-col cols="6">
        <h2>Todos pendientes</h2>
        <todo-list :todos="pending"></todo-list>
      </b-col>
      <b-col cols="6">
        <h2>Todos finalizados</h2>
        <todo-list :todos="done"></todo-list>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoList from '@/components/TodoList'

export default {
  components: {
    TodoList
  },
  mounted () {
    this.fetchTodos()
  },
  methods: {
    ...mapActions('todos', ['fetchTodos'])
  },
  computed: {
    ...mapGetters('todos', ['pending', 'done'])
  }
}
</script>

