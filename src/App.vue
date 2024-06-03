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
    background-color: #e0f7e9; /* Fondo pastel verde claro */
    padding: 1rem;
    border-radius: 8px;
  }

  table,
  th,
  td {
    border: 1px solid #b2dfdb; /* Borde pastel verde */
  }

  th {
    background-color: #a5d6a7; /* Fondo verde pastel para los encabezados */
    color: #2e7d32; /* Color de texto verde más oscuro */
  }

  td {
    background-color: #c8e6c9; /* Fondo verde pastel para las celdas */
    color: #388e3c; /* Color de texto verde más oscuro */
  }

  td,
  th {
    padding: 0 3rem;
  }

  .juegos__table {
    margin: 0 auto;
  }

  /* Estilos para los botones */
  button {
    background-color: #a5d6a7; /* Fondo verde pastel */
    color: #2e7d32; /* Color de texto */
    border: 1px solid #2e7d32; /* Borde verde oscuro */
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Transición suave */
  }

  button:hover {
    background-color: #76ff03; /* Fondo fluor al pasar el cursor */
  }
</style>
