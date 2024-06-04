import { createStore } from 'vuex';
import jsonData from '../data/juegos.json';

export default createStore({
  state: {
    juegos: jsonData
  },
  mutations: {
    changeStockJuego(state, data) {
      const { codigo, action } = data;
      state.juegos = state.juegos.map(juego => {
        if (juego.codigo === codigo) {
          if (action === "sumar") {
            juego.stock++;
          } else {
            // Verificar si el stock es 3 o menos antes de disminuirlo
            if (juego.stock <= 3) {
              window.alert('¡Compra más stock para este juego!');
            } else {
              juego.stock--;
            }
          }
        }
        return juego;
      });
    }
  },
  actions: {
    changeStock(context, data) {
      context.commit("changeStockJuego", data);
    }
  }
});

