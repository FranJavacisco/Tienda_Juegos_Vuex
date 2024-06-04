"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _juegos = _interopRequireDefault(require("../data/juegos.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  state: {
    juegos: _juegos["default"]
  },
  mutations: {
    changeStockJuego: function changeStockJuego(state, data) {
      var codigo = data.codigo,
          action = data.action;
      state.juegos = state.juegos.map(function (juego) {
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
    changeStock: function changeStock(context, data) {
      context.commit("changeStockJuego", data);
    }
  }
});

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
