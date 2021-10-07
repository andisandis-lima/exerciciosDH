let movies = require('../database/catalogo.json');


function createMovie(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
    return {
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoDeLancamento : anoDeLancamento,
        emCartaz: emCartaz,
    }
}

function addMovie(movie) {
    movies.push(movie);
}


function getMovieById(codigo) {
    // solução com callback
    // movies.find(movie => movie.id === id);
    for(i = 0; i < movies.length; i++) {
        if(movies[i].codigo == codigo) {
            return movies[i];
        }
    }
}


function changeStatus(codigo) {
    let movie = getMovieById(codigo);
    movies.emCartaz = movies.emCartaz ? false : true;
    return movie;
}

function listarFilmesEmCartaz() {
    for(i = 0; i < movies.length; i++) {
        if(movies[i].emCartaz == true) {
            console.log("Codigo: " + movies[i].codigo);
            console.log("Título: " + movies[i].titulo);
            console.log("Em Cartaz: " + movies[i].emCartaz);
        }
    }
}

/*function listarFilmesEmCartaz(movies) { 
     movies.forEach(element => { 
        if (movies.emCartaz == true) {
            return element
        }})};
*/
//let listarFilmesDeLongaDuracao = movies.duracao.filter ((durar) => {
//    return durar > 200
//});


module.exports = {movies, createMovie, addMovie, getMovieById, changeStatus, 
     listarFilmesEmCartaz};
