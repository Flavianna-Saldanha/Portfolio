window.onload = function() {
    const menuMobile = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".menu2 nav ul");
    
    menuMobile.addEventListener("click", function() {
        if(menu.style.display === 'flex') {
            menu.style.display = 'none';  
        } else {
            menu.style.display = 'flex';  
        }
    });

    const menuItems = document.querySelectorAll(".menu2 nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menu.style.display = 'none'; 
        });
    });
};

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar =document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");


btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual ++;
    mostrarCartao();
})

btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual --;
    mostrarCartao();
})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
