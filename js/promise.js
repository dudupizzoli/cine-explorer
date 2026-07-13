//criando promises
const myPromise = new Promise((resolve, reject) => {
    const filme = 'Ponyo';

    if (filme === 'Ponyo') {
        resolve('Filme Ponyo encontrado')
    } else{
        reject('Filme Ponyo não encontrado')
    }
});

myPromise.then((resposta) => {
    console.log(resposta);
});

//encadeamento de thens
const myPromise2 = new Promise((resolve, reject) => {
    const filme = 'Ponyo';

    if (filme === 'Ponyo') {
        resolve('Filme Ponyo encontrado')
    } else{
        reject('Filme Ponyo não encontrado')
    }
});

myPromise2.then((resposta) => {
    return resposta.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada);
});

//retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const filme = 'abc';

    if (filme === 'Ponyo') {
        resolve('Filme Ponyo encontrado')
    } else{
        reject('Filme Ponyo não encontrado')
    }
});
myPromise3.then((resposta) => {
    console.log(resposta);
}).catch((erro) => {
    console.log('Aconteceu um erro: ' + erro);
});

//resolver várias promessas com all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok! Timeout');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!');
});

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!');
});

const resolveAll = Promise.all([p1, p2, p3]).then((resposta) => {
    console.log(resposta);
});
console.log('Esse log tá depois do all()');

//resolver várias promessas com race
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok! Timeout');
    }, 2000);
});

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!');
});

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!');
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((resposta) => {
    console.log(resposta);
});

//testando fetch

const URL = 'http://www.omdbapi.com/?apikey=8ff4f9e0&t=ponyo';

chamandoApi();

async function chamandoApi(){
    let resp = await fetch(URL);
    try{
        let obj = await resp.json();
        console.log(obj); 
    } catch(erro){
        console.log('Ocorreu um erro: ' + erro);
        
    };
    
};
