let movies = [{
    codigo:01,
    titulo: 'avatar',
    duracao: 160,
    atores: ["Steve","Joana","Marc"],
    anoDeLancamento: 2018,
    emCartaz: true
    
},
{
    codigo:02,
    titulo: 'Fuga das Galinhas',
    duracao: 190,
    atores: ["Pintadinha", "Lucy", "Mary"],
    anoDeLancamento: 2016,
    emCartaz: false
}];

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

console.log(movies)
/*
function busca (movies) {
    movies.codigo == 01;
    if (emCartaz == true){
        emCartaz = false
    } else if (emCartaz == false){
        emCartaz = true
    }
    return
};

console.log(movies.find(busca));
*/
/*
Buscando Filme

function busca (movies) {
    return movies.codigo == 01;
};

console.log(movies.find(busca));
module.exports = movies*/