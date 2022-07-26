// Como podemos melhorar o esse código usando TS? 
class Person {
    nome:string;
    idade:number;
    profissao:string;

    constructor(nome:string, idade:number, profissao:string) {

        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}


let pessoa1 =  new Person("maria", 29,  "atriz");

let pessoa2 = new Person("roberto", 19, "Padeiro");

let pessoa3 = new Person("laura", 32, "Atriz");

let pessoa4 = new Person("carlos", 19, "padeiro");