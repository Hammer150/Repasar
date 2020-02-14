new Vue({
    el: ".app",
    data: {
        mensaje: "Hola desde vue",
        peliculas: [
            {
                titulo: "Spider-Man: Lejos de casa",
                descripcion: "Luego de los eventos de Avengers Endgame, Peter Parker viaja con sus compañeros a Europa donde debe prepararse para enfrentar nuevas amenazas en un mundo que ha cambiado para siempre.",
                tipo: "Accion",
                año: 2019,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2019/09/spider-man-lejos-de-casa-4k.jpg",
            },
            {
                titulo: "El Rey León",
                descripcion: "Luego de la muerte de su padre, un cachorro de león huye del reino solo para aprender el verdadero significado de la responsabilidad y la valentía.",
                tipo: "Aventura",
                año: 2019,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2019/10/el-rey-leon-2019-4k.jpg",
            },
            {
                titulo: "Toy Story 4",
                descripcion: "Cuando un nuevo juguete llamado Forky se une a Woody y el resto del grupo, un viaje en carretera junto a viejos y nuevos amigos revela qué tan grande puede ser el mundo para un juguete.",
                tipo: "Animado",
                año: 2019,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2019/09/toy-story-4-4k.jpg",
            },
            {
                titulo: "El Hombre Araña 2",
                descripcion: "Después de un tiempo combatiendo el crimen como el Hombre Araña, Peter Parker está abrumado de problemas en su vida personal. Ahora debe luchar con un brillante científico, el doctor Otto Octavius.",
                tipo: "Accion",
                año: 2004,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2017/10/spider-man-2.jpg",
            },
            {
                titulo: "Capitán América: Civil War",
                descripcion: "Con muchas personas temerosas de los poderes de los súper héroes, el gobierno decide aprobar una ley para supervisar las acciones de ellos. Esto resulta en una división dentro de Los Vengadores. Iron Man y Capitán América ahora están enfrentados, con los otros miembros escogiendo bandos, mientras surge un nuevo villano.",
                tipo: "Accion",
                año: 2017,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2016/09/capitan-america-civil-war.jpg",
            },
            {
                titulo: "Avengers: Infinity War",
                descripcion: "Los Vengadores y sus aliados deben estar dispuestos a sacrificar todo en el intento de derrotar al poderoso Thanos antes de que su plan de devastación y ruina ponga fin al universo.",
                tipo: "Accion",
                año: 2018,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2018/08/avengers-infinity-war-4k.jpg",
            },
            {
                titulo: "Dragon Ball Super: Broly",
                descripcion: "Goku y Vegeta se encuentran con Broly, un poderoso guerrero Saiyajin, muy diferente a cualquier otro luchador que hayan enfrentado anteriormente.",
                tipo: "Aventura",
                año: 2018,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2019/05/dragon-ball-super-broly.jpg",
            },
            {
                titulo: "Harry Potter y el cáliz de fuego",
                descripcion: "Acosado por pesadillas que hacen que su cicatriz duela más, Harry está feliz por escapar de sus sueños al poder asistir al Campeonato Mundial de Quidditch. Pero algo siniestro está apareciendo en el cielo, la Marca Oscura, la señal de Lord Voldemort, había sido vista la última vez hace trece años. Parece que este año las cosas van a ser un poco diferentes. Dumbledore anuncia que Hogwarts va a albergar este año el Torneo de los Tres Magos, una de las competiciones mágicas más excitantes y peligrosas.",
                tipo: "Fantasia",
                año: 2005,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2010/06/harry-potter-y-el-caliz-de-fuego.jpg",
            },
            {
                titulo: "Angry Birds: La película",
                descripcion: "Descubre por qué los Angry Birds están tan enojados. Cuando una isla poblada de aves felices, pero que no pueden volar, es visitada por unos misteriosos cerdos verdes, depende de tres insospechadas aves - Red, Chuck y Bomb - descubrir qué es lo que están tramando los cerdos.",
                tipo: "Animado",
                año: 2016,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2016/07/angry-birds-la-pelicula.jpg",
            },
            {
                titulo: "Batman: El Caballero de la Noche",
                descripcion: "La amenaza conocida como el Joker desata el caos y la destrucción sobre los ciudadanos de Ciudad Gótica después de que el nuevo fiscal de distrito, Harvey Dent, haya logrado frenar a los criminales. Ahora el justiciero con capa, Batman, debe llegar a un entendimiento con una de sus mayores pruebas psicológicas de su habilidad para luchar contra la injusticia.",
                tipo: "Accion",
                año: 2008,
                portada: "https://www.cinecalidad.is/wp-content/uploads/2016/03/batman-el-caballero-de-la-noche.jpg",
            },
        ],
        contador: 0,
        ver: true,
        accion: false,
        aventura: false,
        animado: false,
        fantasia: false,
        ptitulo: true,
        pdescripcion: true,
        añop: true,
    },
    computed:{
        filtrarAccion(){
          return this.peliculas.filter(function(peli){
            return peli.tipo == "Accion"
          })
        },
        filtrarAventura(){
            return this.peliculas.filter(function(peli){
              return peli.tipo == "Aventura"
            })
          },
          filtrarAnimado(){
            return this.peliculas.filter(function(peli){
              return peli.tipo == "Animado"
            })
          },
          filtrarFantasia(){
            return this.peliculas.filter(function(peli){
              return peli.tipo == "Fantasia"
            })
          }
    }

})