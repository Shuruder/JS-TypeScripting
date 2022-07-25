console.log('TypeScript');

function soma(a: number, b: number) {
    return a + b;
}

//soma('a','b');  // typescript já indica os erros de tipagem no código


// types


// interfaces

/*
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: Number): void;
}
*/

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean
}

const animal: IAnimal = {  //  Ctrl + Space indica o que contem a interface
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false
    //executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

interface IFelino extends IAnimal {
    visaoNoturna: Boolean;
}

// Como Usar o Type

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;  // type define junções e Merges entre as classes

const animal2: IDomestico = {
    nome: 'cachorro',
    tipo: "terrestre",
    domestico: true,
    porte: "medio",
}
