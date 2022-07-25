interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroRO = {
    readonly [K in keyof Cachorro]: Cachorro[K]; // podendo remover valores opcionais com -? | [k in keyof cachorro]-?
}

class MeuCachorro implements CachorroRO  {
     nome; // private não funciona por conta do implements
     idade;

    constructor(nome, idade) {
        this.nome = nome ;
        this.idade = idade;
    } 
}


const cao = new MeuCachorro('Billy', 14); // e se eu quiser que seja privado ou só leitura?