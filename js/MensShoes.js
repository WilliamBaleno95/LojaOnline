var produto1 = document.querySelector("#produto1");
var produto2 = document.querySelector("#produto2");
var produto3 = document.querySelector("#produto3");
var produto4 = document.querySelector("#produto4");
var produto5 = document.querySelector("#produto5");
var produto6 = document.querySelector("#produto6");
var produto7 = document.querySelector("#produto7");
var produto8 = document.querySelector("#produto8");
var produto9 = document.querySelector("#produto9");
var precoTotal = document.querySelector("#precoTotal");

var contMShoes =0
function AddCartMShoes(){
    contMShoes =contMShoes +1;
    var preco = 2500;
    var valorTotal = preco*contMShoes;
    produto1.innerHTML = contMShoes + " Formal Shoes = "+ valorTotal+ "$00";
    // cont + " Men's Shoes = "+ valorTotal;
}

var contWShoes =0
function AddCartWShoes(){
    contWShoes =contWShoes +1;
    var preco = 3500;
    var valorTotal = preco*contWShoes;
    produto2.innerHTML = contWShoes + " Nike Air Force 1 = "+ valorTotal+ "$00";

    
}
var contkShoes =0;
function AddCartKShoes(){
    contkShoes =contkShoes +1;
    var preco = 2300;
    var valorTotal = preco*contkShoes;
    produto3.innerHTML = contkShoes + " Puma = "+ valorTotal+ "$00";

    

}

var contMShirts =0;
function AddCartMShirts(){
    contMShirts =contMShirts +1;
    var preco = 4500;
    var valorTotal = preco*contMShirts;
    produto4.innerHTML = contMShirts + " Air Jordan = "+ valorTotal+ "$00";

}

var contwShirts =0;
function AddCartWShirts(){
    contwShirts =contwShirts +1;
    var preco = 3800;
    var valorTotal = preco*contwShirts;
    produto5.innerHTML = contwShirts + " Adidas = "+ valorTotal+ "$00";

}

var contkShirts =0;
function AddCartkShirts(){
    contkShirts =contkShirts +1;
    var preco = 1000;
    var valorTotal = preco*contkShirts;
    produto6.innerHTML = contkShirts + " All Star = "+ valorTotal+ "$00";

}
// var contPants =0;
// function AddCartPants(){
//     contPants =contPants +1;
//     var preco = 1990;
//     var valorTotal = preco*contPants;
//     produto7.innerHTML = contPants + " Pants = "+ valorTotal+ "$00";
// }

// var contDresses=0;
// function AddCartDresses(){
//     contDresses =contDresses +1;
//     var preco = 1990;
//     var valorTotal = preco*contDresses;
//     produto8.innerHTML = contDresses + " Dresses = "+ valorTotal+ "$00";
// }

// var contKPants =0;
// function AddCartPants(){
//     contKPants =contKPants +1;
//     var preco = 1000;
//     var valorTotal = preco*contKPants;
//     produto9.innerHTML = contKPants + " Kids's Pants = "+ valorTotal+ "$00";
// }

// var total=0
// function soma(){
//     var valor1 = AddCartMShoes();
//     var valor2 = AddCartWShoes();
//     total = valor1+valor2;

//     precoTotal.innerHTML = soma();
// }

function Pagar(){

    if( produto1.childNodes.length == 0 &&  produto4.childNodes.length == 0 
        && produto2.childNodes.length == 0 && produto5.childNodes.length == 0 
        && produto3.childNodes.length == 0 && produto6.childNodes.length == 0 ){

        alert("Voce nao adicionou nada ao carrinho!\nImpossivel efetuar pagamento");
    
    }
    else{
        
        alert("Pagado com sucesso ");
        window.location.reload();
    }
  
}

