// Generic Types

function adicionaApendiceALista<NaoSei>(array: any[], valor: NaoSei ) { // por padrão é colocado a letra T no lugar do NaoSei
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 1); // COmo tipar esses dados? olhe na função

// Então basicamente quando você não sabe o que vai receber você pode criar um receptor generico