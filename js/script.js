// criando variaveis
// const titulo = 'Como Treinar Seu Dragão';
// let nota = 10;
// const ano = 2010;
// const genero = 'fantasia';
// let classificacao = '';

//exibindo as variáveis
// console.log(titulo);
// console.log(nota);
// console.log(ano);
// console.log(genero);

// console.log('------------------------');

//fazendo uma classificação com if else
// if (nota >= 8) {
//     classificacao = 'Excelente';    
// }
// else if (nota >= 6) {
//     classificacao = 'Bom';
// }
// else{
//     classificacao = 'Regular';
// }
// console.log(`O filme possui a classificação ${classificacao}`);

//fazendo uma classificação com switch case
// switch (true) {
//     case nota >= 8:
//         classificacao = 'Excelente';
//         break;

//     case nota >= 6:
//         classificacao = 'Bom';
//         break;

//     default:
//         classificacao = 'Regular';
// }
// console.log(`O filme possui a classificação ${classificacao}`);
// console.log('------------------------');

//fazendo o 1 array de filmes
const filmes = [
    'Como Treinar Seu Dragão - DreamWorks',
    'Serviço de Entregas da Kiki - Studio Ghibli',
    'Ponyo - Studio Ghibli',
    'A Viagem de Chihiro - Studio Ghibli',
    'Kimetsu no Yaiba: Mugen Train - Ufotable',
    'Jujutsu Kaisen 0 - Mappa',
    'Homem-Aranha: Sem Volta Pra Casa - Marvel Studios',
    'O Castelo Animado - Studio Ghibli',
    'Backrooms - A24',
    'Meu Amigo Totoro - Studio Ghibli'
];

//exibindo os filmes
// for (let i = 0; i < filmes.length; i++) {
//     console.log(filmes[i]);
// };
// console.log('------------------------');

// for (const filme of filmes) {
//     console.log(filme);
// };
// console.log('------------------------');

// let comentarios = 10;
// for (let i = 0; i < comentarios; i++){
//     let notasComentarios = Math.random();
//     notasComentarios*=10;
//     notasComentarios=parseInt(notasComentarios);
//     console.log(notasComentarios);
// }

//calculo de média
// const calcularMedia = (n1, n2, n3, n4, n5) => {
//     return (n1 + n2 + n3 + n4 + n5)/ 5;
// }
// media = calcularMedia(8, 9, 10, 7, 5);
// console.log(media.toFixed(1));

// console.log('------------------------');

//adicionando novos filmes ao array
filmes.push('Princesa Mononoke - Studio Ghibli',
    'Deadpool vs Wolverine - Marvel Studios',
    'Kimetsu no Yaiba: Castelo Infinito - Ufotable',
    'Vingadores - Ultimato - Marvel Studios',
    'Como Treinar Seu Dragão 2 - DreamWorks',
    'Como Treinar Seu Dragão 3 - DreamWorks',
    'Jurassic Park - Universal Pictures',
    'Jurassic World - Universal Pictures'
);

// const filmesExtensao = filmes.find((filme) => {
//     return filme.length < 20;
// });
// console.log(filmesExtensao);

// const filmesGhibli = filmes.filter((filme) => {
//     return filme.includes('Ghibli');
// });
// console.log(filmesGhibli);

function Filme(titulo, ano, studio, nota){
    this.titulo = titulo;
    this.ano = ano;
    this.studio = studio;
    this.nota = nota;
};

const filme1 = new Filme ('Como Treinar Seu Dragão', 2010, 'DreamWorks', 9);
const filme2 = new Filme ('Serviço de Entregas da Kiki', 1989, 'Studio Ghibli', 10);
const filme3 = new Filme ('Ponyo', 2008, 'Studio Ghibli', 9.5);
const filme4 = new Filme ('A Viagem de Chihiro', 2001, 'Studio Ghibli', 9);
const filme5 = new Filme ('Kimetsu no Yaiba: Mugen Train', 2020, 'Ufotable', 9);

const novosFilmes = [];
novosFilmes.push(filme1, filme2, filme3, filme4, filme5);
console.log(novosFilmes);

// desestruturação de array
const filmesSalvos = [f1, f2] = novosFilmes;
console.log(f1);
console.log(f2);

// desestruturação de objeto
const { titulo, ano, studio, nota} = filme2;
console.log(titulo);
console.log(ano);

//formatação com map
const novosFilmesFormatada = novosFilmes.map(filme => {
    return `${filme.titulo} (${filme.ano}) | Studio: ${filme.studio} | Nota: ${filme.nota}`;
});

console.log(novosFilmesFormatada);

//achando um filme com find
const achandoFilme = novosFilmesFormatada.find((filme) => {
    return filme.includes('Como Treinar Seu Dragão')
})
console.log(achandoFilme);

//filtrando pela nota com filter
const filmesExcelentes = novosFilmes.filter((filme) => {
    return filme.nota >= 9.5;
});
console.log(filmesExcelentes);

//calculando média com novos filmes
const notasFilmes = novosFilmes.map(filme => filme.nota);
let soma = 0;
for (let i = 0; i < notasFilmes.length; i++){
    soma += notasFilmes[i]; 
};
media = soma/notasFilmes.length;
console.log(media);

//buscando dados com fetch

async function chamandoApi(){
    try{
        const nomeFilme = document.getElementById('filmeBusca').value.toLowerCase();
        const resp = await fetch(`http://www.omdbapi.com/?apikey=8ff4f9e0&t=${nomeFilme}`);

        if (!resp.ok) {
            throw new Error ('Não foi possível realizar a busca');
        }

        let obj = await resp.json();
        // console.log(obj);
        
        const filmePoster = obj.Poster;
        const tagImgPoster = document.getElementById('posterFilme')
        tagImgPoster.src = filmePoster;
        tagImgPoster.style.display = "block";

        document.getElementById('titulo').textContent = obj.Title;
        document.getElementById('sinopse').textContent = obj.Plot;
        document.getElementById('ano').textContent = `Ano: ${obj.Year}`;
        document.getElementById('nota').textContent = `Nota: ${obj.Metascore}`;
        document.getElementById('diretor').textContent = `Diretor: ${obj.Director}`;
        document.getElementById('atores').textContent = `Principais Atores: ${obj.Actors}`;

    } catch(erro){
        console.log('Ocorreu um erro: ' + erro); 
    };
};

const btnBusca = document.getElementById('buscaButton');
btnBusca.addEventListener('click', chamandoApi);