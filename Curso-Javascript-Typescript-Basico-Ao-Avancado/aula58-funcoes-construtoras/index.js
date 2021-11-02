function Pessoa(nome ,sobrenome){
    CONST ID = 10;

    const metodoInterno = _ =>{

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método')
    }
}