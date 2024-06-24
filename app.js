function sortear() {
    let quant = parseInt(document.getElementById("quantidade").value); 
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);  
    let sorteados = []; 
    let num;

    for(let i = 0; i<quant; i++){
        num = gerarNumAleatorio(de, ate);
      
        while (sorteados.includes(num)) {
          num = gerarNumAleatorio(de, ate); 
          alert('Tentando obter número inédito');

       }
      
       sorteados.push(num); 
    }

    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
    alterarStatudsBotao();
}
function gerarNumAleatorio(min, max) {

    return Math.floor(Math.random()* (max-min +1)) + min; 
}

function alterarStatudsBotao() {
    let btn = document.getElementById("btn-reiniciar"); 
        
    if(btn.classList.contains('container__botao-desabilitado')) {
            
            btn.classList.remove('container__botao-desabilitado');
            btn.classList.add('container__botao');
        }else{
            btn.classList.remove('container__botao');
            btn.classList.add('container__botao-desabilitado');
        }
}


   function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = "Números sorteados:  nenhum até agora";
    alterarStatudsBotao();
}