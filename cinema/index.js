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
    movie.emCartaz = movie.emCartaz ? false : true;
    return movie;
}

function listarTodosOsFilmes(movies) {
    for(i = 0; i < i.length; i++)
        return movies[i];
}

function listarFilmesEmCartaz(movies) {
    for(i = 0; i < i.length; i++) 
        if (movies.emCartaz == true) {
            return movies[i]
        }
}

module.exports = {movies, createMovie, addMovie, getMovieById, changeStatus, 
    listarTodosOsFilmes, listarFilmesEmCartaz};

/*
CRIANDO FILME

function AdcFilme (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
    this.codigo = codigo,
    this.titulo = titulo,
    this.duracao = duracao,
    this.atores = atores,
    this.anoDeLancamento = anoDeLancamento,
    this.emCartaz = emCartaz 
}

let terceiroFilme = new AdcFilme (03, "Space Jam", 203, 
["Lebrom James", "Damian Lillard", "Anthony Davis"], 2021, true)

movies.push(terceiroFilme);

console.log(movies);
*/


/*
BUSCANDO FILME

function busca (movies) {
    return movies.codigo == 01;
};

console.log(movies.find(busca));
*/