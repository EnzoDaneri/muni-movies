//Import de componente
import DetallePelicula from './peliculas/DetallePelicula.svelte';



// Declaración de Rutas
 const routes = {

     //Paso parámetros a través de la URL
    '/detalle/:id/:title/:cover/:overview':  DetallePelicula,
    
  }

  export default routes;
  