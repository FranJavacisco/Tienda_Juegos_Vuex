<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="juegos wrapper">
      <h1 class="juegos__title">Tienda 32 bits</h1>

      <h3 class="juegos__subtitle">Lista de juegos</h3>

      <table class="juegos__table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego of juegos" :key="juego.codigo" >
            <td>{{ juego.codigo }}</td>
            <td>{{ juego.nombre }}</td>
            <td>{{ juego.stock }}</td>
            <td>{{ juego.precio }}</td>
            <td>
              <button @click="changeStock({ codigo: juego.codigo, action: 'sumar' })" >+</button>
              <button @click="changeStock({ codigo: juego.codigo, action: 'restar' })">-</button>
            </td>
          </tr>
        </tbody>
      </table>


  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["changeStock"])
  },
}


</script>

<style>

  .juegos {
    text-align: center;
  }

  table,
  th,
  td {
    border: 1px solid black;
  }

  td,
  th {
    padding: 0 3rem;
  }

  .juegos__table {
    margin: 0 auto;
  }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
