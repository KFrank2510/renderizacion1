<template>
  <div>
 
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
     <label>curriculum:</label>
    <input type="text" v-model="curriculum" />{{curriculum}}
    <br/>
    <button v-on:click="Datos">aceptar</button>

  </div>

</template>
<script>
export default{
  name: "vifor",
  props:{
  },
  data(){
    return{
      
      mensaje:"Bienvenidos a NERVERLAD",
      valor: null,
      nombre:"ANA LUISA",
      apellido:null,
      direccion: null,
      telefono: null,
      curriculum:null,

    }
  },
  methods:{
    Datos(){
      alert(this.nombre+ '' +this.apellido+ '' +this.direccion+ ''+this.telefono+this.curriculum)
    }
  },
}
</script>
