/*
Autenticável == ter o método autenticar;

ducky type = não interessa o tipo do objeto e sim o que consegue fazer, se possui a presença dos métodos e propriedades;

*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);   
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}