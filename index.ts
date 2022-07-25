interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}



function redirecione(usurario: IUsuario) {
   if (usurario.cargo) {
    //redirecionar(usuário.cargo)
   }

   // redirecionar para area de usuario
}