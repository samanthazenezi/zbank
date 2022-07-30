// LOGIN
function logar() {
    var login = document.querySelector("#login").value;
    var senha = document.querySelector("#senha").value;

    if(login == "admin" && senha == "12345") {
        location.href = "index.html"
    } 
    else {
        alert('Usuário ou senha inválidos!')
    } 
}

// MODAL 
function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
}

// SALDO
function fazerTransacao(){
    var saldo = document.getElementById('saldo').value;
    var valorDaTransacaoPositiva = document.getElementById('valor').value;
    var valorDaTransacaoNegativa = document.getElementById('valor').value;

    if (!saldo) {
        saldo = 0
    }

    var somaTotal = parseInt(saldo) + parseInt(valorDaTransacaoPositiva);
    var somaTotal = parseInt(saldo) - parseInt(valorDaTransacaoNegativa);
    document.getElementById('saldo').innerText = somaTotal;
    //extratoDeposito();
    onOff();
}




//EXTRATO DEPOSITO//
//function extratoDeposito(){
    //let extrato1 = document.getElementById('valordeposito');
    //let listExtrato = document.getElementById('extrato');

    //var valorFormatado = formartarMoeda(extrato1.value);

    //listExtrato.innerHTML += '<div class="tpositiva">' + '<img src="./assets/porco.svg">' + '<p>Deposito</p>'+ data() + '<p></p>' + hora() + '<p></p>' + formartarMoeda(extrato1.value) + '</div>'
//}
//EXTRATO SAQUE//
//function extratoSaque(){
    //let extrato2 = document.getElementById('valorsaque');
    //let listExtrato = document.getElementById('extrato');

    //var valorFormatado = formartarMoeda(extrato2.value);

    //listExtrato.innerHTML += '<div class="tnegativa">' + '<img src="./assets/pix0.svg">' + '<p>Saque</p>' + data() + '<p></p>' + hora() + '<p></p>' + formartarMoeda(extrato2.value) + '</div>'
//}
//DATA PARA EXTRATO//
//function data(){
    //let data = new Date(),
    //dia  = data.getDate().toString().padStart(2, '0'),
    //mes  = (data.getMonth()+1).toString().padStart(2, '0'),
    //ano  = data.getFullYear();
    //return `${dia}/${mes}/${ano}`;
    
    //return data;
//}
//HORA PARA EXTRATO//
//function hora(){
    //let data = new Date(),
    //horas = data.getHours();
    //minutos = data.getMinutes();
    //return `${horas}:${minutos}`;
    
    //return hora;
//}
//MOEDA FORMATADA//
//function formartarMoeda(valor) {
    //var valor = parseInt(valor);
    //var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' });
    //return valorFormatado;
//}

    










