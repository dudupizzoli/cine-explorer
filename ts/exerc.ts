let idade: number = 20;
console.log(idade);

let numero: string = 'claro';

// numero = 6;
// idade = 'o';

let ativo: boolean = false;
// ativo = 'inativo';

let qualquerCoisa: any = 'qualquer coisa';
qualquerCoisa = 56857;
qualquerCoisa = true;

const pindamonhangaba: number[] = [];
pindamonhangaba.push(5);
pindamonhangaba.push(94);
// pindamonhangaba.push('pao de lo');

const amaciante: string[] = [];
amaciante.push('cimitarra');
amaciante.push('evacuacao');
// amaciante.push(67);

function conta(a: number, b: number): number {
    return a + b;
};
conta(1, 2);

const pokemon: {
    nome: string;
    tipo: string;
    hp: number;
} = {
    nome: 'Serperior',
    tipo: 'planta',
    hp: 200
};

