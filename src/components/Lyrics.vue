<template>
   <span class="text-h1">Listado de canciones</span>
    <div class="">
      <v-form ref="form" @submit.prevent="submit" v-model="Valid" lazy-validation>
       <v-text-field 
       v-model="artista" 
       label="Ingrese el nombre del Artista" 
       :rules="[v => !!v || 'Artista es requerido']" 
       required></v-text-field>
       <v-text-field 
       v-model="cancion" 
       label="Ingrese el nombre de la cancion"
       :rules="[v => !!v || 'Cancion es requerido']" 
       required></v-text-field>
       <v-btn color="primary" type="submit">Buscar Cancion</v-btn>
      </v-form>
    </div>
    <div class="">
      <p ref="name">Nombre artista: {{artista}}</p>
      <p>Cancion: {{cancion}}</p>
      <p>Letra de la canción</p>
      <p> {{letraCancion}} </p>
   </div>

</template>

<script>
import {consumirCancion} from "./../api";

export default {
  name : 'Lyrics',
  components: {
  },
  data() {
    return{
      Valid : true,
      artista: "",
      cancion: "",
      letraCancion: ""
    };
  },
  methods: {
    async submit(){
      // console.log('Se ejecuta el metodo submit')
      
      //ej 1
      // consumirCancion(this.artista, this.cancion).then(letra => console.log(letra.lyrics));
      //validacion de formulario
      if(!this.$refs.form.validate()){
         console.log("Error formulario incompleto")
         return
      }else{
      //ej2
         this.letraCancion =  await consumirCancion(this.artista, this.cancion);
         console.log(this.letraCancion);
      }
    }
  }
};
</script>

<style>

</style>
