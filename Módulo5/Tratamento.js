try {
    let num1 = prompt("Digite um número");
    let num2 = prompt("Digite um número");
    if (isNaN(num1) || isNaN(num2)) {
        throw "Só numeros" 
    }
} catch (error) {
    console.log(error);
}finally{
    console.log("Acabou o programa");
}