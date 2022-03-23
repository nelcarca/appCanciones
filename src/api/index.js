const consumirCancion =  async (artista, cancion) => {
   try {
   const data = await fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`);
   const response = await data.json();
   return response.lyrics;
   } catch (error) {
      console.log(error);
   }
}

module.exports = {
   consumirCancion
}

