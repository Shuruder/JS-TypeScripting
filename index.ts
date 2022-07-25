console.log('TypeScript');

function soma(a: number, b: number) {
    return a + b;
}

//soma('a','b');  // typescript já indica os erros de tipagem no código


// types


// interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: Number): void;
}

const animal: IAnimal = {  //  Ctrl + Space indica o que contem a interface
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

interface IFelino extends IAnimal {
    visaoNoturna: Boolean;
}

