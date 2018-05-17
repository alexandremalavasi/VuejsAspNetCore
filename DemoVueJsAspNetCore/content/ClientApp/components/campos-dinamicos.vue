<template>
    <div>
        <h1>Campos dinâmicos</h1>

        <template>
          Quantidade: <input type="text" v-model="quantidade" ></input>

          <br/><br></br>
          <table class="table" v-if="quantidade">
            <thead  class="bg-dark text-white">
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr :class="index % 2 == 0 ? 'bg-white' : 'bg-light'"
                  v-for="index in parseInt(quantidade)">
                <td>
                  
                </td>
                <td>
                  Campo {{index}} <input type="text" ></input>
                </td>
                <td>
                  <select>
                    <option>--Selecione--</option>
                    <option v-for="index_select in parseInt(quantidade) ">
                        Item  {{index_select}}
                    </option>

                  </select>
                </td>
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
      quantidade:0
      }
  },

  methods: {
    
  },

  async created () {
        
       
  }
}
</script>

<style>
</style>
