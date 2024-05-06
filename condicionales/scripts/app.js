const app = Vue.createApp({
    data() {
      return {
       mensajito: "Mi super App en Vue",
			mostrar:true,
			selected:"seleccionado",
			valor:9,
			edad: 32,
			resultado:1,
			saludo:'<h1>Hola</h1>',
			dato:false
      }

    },
});
app.mount('#contenedor');



