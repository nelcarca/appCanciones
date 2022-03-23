<template>
  <v-app>
    <v-main>
      <Lyrics/>
    </v-main>
  </v-app>
</template>

<script>
import Lyrics from './components/Lyrics.vue';

export default {
  name: 'App',

  components: {
    Lyrics,
  },

  data: () => ({
    //
  }),
}
</script>
