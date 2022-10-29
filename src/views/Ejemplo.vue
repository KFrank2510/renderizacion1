<template>
  <div>
    {{numero}}
    <br/>
    {{mensaje}}
    <br/>
    {{valor}}
    <br/>
    <label>nombre:</label>
    <input type="text" v-model="nombre" />{{nombre}}
    <br/>
     <label>apellido:</label>
    <input type="text" v-model="apellido" />{{apellido}}
    <br/>
     <label>direccion:</label>
    <input type="text" v-model="direccion" />{{direccion}}
    <br/>
     <label>telefono:</label>
    <input type="text" v-model="telefono" />{{telefono}}
    <br/>
    <button v-on:click="Datos">aceptar</button>

  </div>

</template>
<script>
export default{
  name: "Ejemplo",
  props:{
  },
  data(){
    return{
      numero:2,
      mensaje:"hola",
      valor: null,
      nombre:"juanita perez",
      apellido:null,
      direccion: null,
      telefono: null

    }
  },
  methods:{
    Datos(){
      alert(this.nombre+ '' +this.apellido+ '' +this.direccion+ ''+this.telefono)
    }
  },
}
</script>
