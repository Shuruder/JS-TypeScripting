interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usurario: IUsuario | IAdmin) {
    //if( usurario.cargo) // vai dar erro porque não há provas dque é um admin
    if ('cargo' in usurario) { // usamos o in
        // redirecionar para a area de administração
    }
    // redireciona para area do usuário
}