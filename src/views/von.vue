<template>
  <div>
    {{mensaje}}
    <br/>
    {{valor}}
    <br/>


    <label>lugar:</label>
    <input type="text" v-model="lugar" />{{lugar}}
    <br/>
     <label>direccion:</label>
    <input type="text" v-model="direccion" />{{direccion}}
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
      
      mensaje:"Sofware",
      valor: null,
      lugar:"Piendamo",
      direccion:null,
      

    }
  },
  methods:{
    Datos(){
      alert(this.lugar+this.direccion )
    }
  },
}
</script>
