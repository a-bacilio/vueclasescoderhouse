const app = new Vue({
  el: "#app",
  data: {
    usuario: "Alberto",
    derecho: true,
    izquierdo: true,
  },
  methods: {
    presionaIzquierdo() {
      this.derecho = true;
      this.izquierdo = false;
    },
    presionaDerecho() {
      this.derecho = false;
      this.izquierdo = true;
    },
  },
});
