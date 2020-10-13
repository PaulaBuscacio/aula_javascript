
var nome = "Paula Buscácio";
var idade = 38;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert( nome);
/* console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
*/
//Array
// var lista = ["maçã", "pera", "laranja"]
// console.log(lista);
// lista.push("uva"); //acrescenta um elemento ao final
// console.log(lista);
// lista.pop(); //tira o último elemnto
// console.log(lista);
// console.log(lista[1]);
// console.log(lista.length);
// //console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" - ")); //também transforma em string, mas podemos escolher o conectivo

//Dicionário
// var fruta = {nome:"maçã", cor:"vermelha"}
// console.log(fruta.nome);

//Lista de Dicionários
// var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
// console.log(frutas);
// console.log(frutas[1].nome);

// // For
// var count;
// for(count=0; count <= 5; count++) {
//     alert(count); 
// }

// //while
// var count = 0;
// while(count<=5) {
//     console.log(count);
//     count++;
// }

// var d = new Date();
// alert(d);
// alert(d.getMonth() + 1);
// alert(d.getMinutes());
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getUTCDate());
// alert(d.getDate());

function  soma(n1, n2) {
    return n1 + n2 
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

var validar // variável global
function validaIdade(idade) {
    if(idade >= 18) {
        validar=true
    } else {
        validar=false
    }
    return validar;
}

// var idade = prompt("Qual a sua idade?");
// validaIdade(idade);
// console.log(validar);

// alert (soma(5, 10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   // alert("Obrigado por clicar")
}

function redirecionar() {
  //  window.open("https://google.com/"); //abre em outra aba
    window.location.href = "https://google.com/"; //abre na mesma aba
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
  //  alert("trocar texto")
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}