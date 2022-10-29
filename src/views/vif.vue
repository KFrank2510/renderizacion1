<template>
  <div>
    {{mensaje}}
    <br/>
    {{valor}}
    <br/>


    <label>nombre:</label>
    <input type="text" v-model="nombre" />{{nombre}}
    <br/>
     <label>raza:</label>
    <input type="text" v-model="raza" />{{apellido}}
    <br/>
     <label>sexo:</label>
    <input type="text" v-model="sexo" />{{direccion}}
    <br/>
     <label>edad:</label>
    <input type="text" v-model="edad" />{{telefono}}
    <br/>
    <button v-on:click="Datos">aceptar</button>

  </div>

</template>
<script>
export default{
  name: "vif",
  props:{
  },
  data(){
    return{
      
      mensaje:"Todos hacemos parte de un mismo mundo",
      valor: null,
      nombre:"Zeus",
      sexo:null,
      raza: null,
      edad: null

    }
  },
  methods:{
    Datos(){
      alert(this.nombre+this.sexo+this.raza+this.edad )
    }
  },
}
</script>
