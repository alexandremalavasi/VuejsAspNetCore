<template>
    <div>
        <h1>Lista de Pessoas</h1>

        <template v-if="lista_pessoas">
            <table class="table">
                <thead  class="bg-dark text-white">
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="index % 2 == 0 ? 'bg-white' : 'bg-light'" v-for="(pessoa, index) in lista_pessoas" :key="index">
                        <td>{{ pessoa.id }}</td>
                        <td>{{ pessoa.nome }}</td>
                    </tr>
                </tbody>
            </table>
            
        </template>
    </div>
</template>

<script>
  export default {

  computed: {
     
  },
  data () {
      return {
      lista_pessoas: []

      }
  },

  methods: {
    async loadPage () {
    try {
            let response = await this.$http.get('/api/pessoa/lista')
            this.lista_pessoas = response.data
        } catch (err)
        {
            window.alert(err)
            console.log(err)
        } 
    }
  },

  async created () {
        
        this.loadPage()
  }
}
</script>

<style>
</style>
