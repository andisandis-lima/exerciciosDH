var {movies, createMovie, addMovie, getMovieById, changeStatus, 
   listarTodosOsFilmes, listarTodosOsFilmes, listarFilmesEmCartaz} = require('./cinema');

 /*
 const newMovie = {
    codigo: 3,
    titulo: 'Deadpool',
    duracao: 203,
    atores: ["Lebrom James", "Damian Lillard", "Anthony Davis"],
    anoDeLancamento: 2021,
    emCartaz: false,
 }
 */

// criando novo objeto de movie
let newMovie = createMovie(03, "Space Jam", 203, 
["Lebrom James", "Damian Lillard", "Anthony Davis"], 2021, true);
addMovie(newMovie);
console.log('--------------------------------------------')
//console.log(movies);

// alterando status
changeStatus(3);
console.log('--------------------------------------------')


// obtendo objeto de movie pelo id
let pesquisa = getMovieById(02);
//console.log(pesquisa)

listarTodosOsFilmes( );

listarFilmesEmCartaz( );
