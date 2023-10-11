let cachorro ={
    especie:"",
    nome:"",
    idade:0,

    setEspecie(especie){
        this.especie = especie;
    },

    setNome(nome){
        this.nome = nome;
    },

    setIdade(idade){
        this.idade = idade;
    }

}

let gato ={
    raça:"",
    tutor:"",
    sexo:"",
    
    setRaça(raça){
        this.raça = raça;
    },

    setTutor(tutor){
        this.tutor = tutor;
    },

    setSexo(sexo){
        this.sexo = sexo;
    }
}

let bateriaDoCelular ={
    porcentagem:"50%",
    carregado:false,
    estado:"Boa",

    setPorcetagem(num){
        this.porcentagem = num+"%";
    },

    setCarregado(){
        this.carregado = true;
    },

    setEstado(nome){
        this.estado = nome;
    }

}

let volumeTv ={
    volume:0,
    mudo:true,
    maximo:false,

    aumentar(){
        this.volume++;
        this.mudo = false
    },

    diminuir(){
        this.volume--;
        this.mudo = false
    },

    mudo(){
        this.mudo = true
    }
}