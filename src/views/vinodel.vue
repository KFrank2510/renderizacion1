<template>
  <div>
    {{mensaje}}
    <br/>
    {{valor}}
    <br/>


    <label>producto:</label>
    <input type="text" v-model="nombre" />{{nombre}}
    <br/>
     <label>cantidad:</label>
    <input type="text" v-model="producto" />{{producto}}
    <br/>
     <label>marca:</label>
    <input type="text" v-model="marca" />{{marca}}
    <br/>
     <label>precio:</label>
    <input type="text" v-model="precio" />{{precio}}
    <br/>
     <label>fechaVencimiento:</label>
    <input type="text" v-model="fechaVencimiento" />{{fechaVencimiento}}
    <br/>
    
    <button v-on:click="Datos">aceptar</button>

  </div>

</template>
<script>
export default{
  name: "vinodel",
  props:{
  },
  data(){
    return{
      
      mensaje:"Todo lo  Mejor Para El Cliente",
      valor: null,
      producto:"Televisor ",
      cantidad:null,
      marca: null,
      precio: null,
      fechaVencimiento: null,

    }
  },
  methods:{
    Datos(){
      alert(this.nombre+this.cantidad+this.marca+this.precio+this.fechaVencimiento )
    }
  },
}
</script>
