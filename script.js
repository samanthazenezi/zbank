
//DEPOSIAR//
function ação(){
    let modal = document.getElementById('modal')

    modal.style.display = 'flex';
}

function sair(){
    let modal = document.getElementById('modal')

    modal.style.display = 'none';
}

function depositar(){
    var valorTotal = document.getElementById('valor').value;
    var valorDepositado = document.getElementById('valordeposito').value;

    if (!valorTotal) {
        valorTotal = 0
    }

    var somaTotal = parseInt(valorTotal) + parseInt(valorDepositado)
    document.getElementById('valor').innerText = somaTotal;
    extratoDeposito();
    sair();
}
//SACAR//
function sacar(){
    let modal = document.getElementById('modalsacar')

    modal.style.display = 'flex';
}

function fechar(){
    let modal = document.getElementById('modalsacar')

    modal.style.display = 'none';
}

function saque(){
    var valorConta = document.getElementById('valor').innerText;
    var valorSaque = document.getElementById('valorsaque').value;

    if (!saqueTotal) {
        saqueTotal = 0
    }

    var saqueTotal = parseInt(valorConta) - parseInt(valorSaque)
    document.getElementById('valor').innerText = saqueTotal;
    console.log(saqueTotal);
    extratoSaque();
    fechar();
}
//EXTRATO DEPOSITO//
function extratoDeposito(){
    let extrato1 = document.getElementById('valordeposito');
    let listExtrato = document.getElementById('extrato');

    var valorFormatado = formartarMoeda(extrato1.value);

    listExtrato.innerHTML += '<div class="tpositiva">' + '<img src="./assets/porco.svg">' + '<p>Deposito</p>'+ data() + '<p></p>' + hora() + '<p></p>' + formartarMoeda(extrato1.value) + '</div>'
}
//EXTRATO SAQUE//
function extratoSaque(){
    let extrato2 = document.getElementById('valorsaque');
    let listExtrato = document.getElementById('extrato');

    var valorFormatado = formartarMoeda(extrato2.value);

    listExtrato.innerHTML += '<div class="tnegativa">' + '<img src="./assets/pix0.svg">' + '<p>Saque</p>' + data() + '<p></p>' + hora() + '<p></p>' + formartarMoeda(extrato2.value) + '</div>'
}
//DATA PARA EXTRATO//
function data(){
    let data = new Date(),
    dia  = data.getDate().toString().padStart(2, '0'),
    mes  = (data.getMonth()+1).toString().padStart(2, '0'),
    ano  = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
    
    return data;
}
//HORA PARA EXTRATO//
function hora(){
    let data = new Date(),
    horas = data.getHours();
    minutos = data.getMinutes();
    return `${horas}:${minutos}`;
    
    return hora;
}
//MOEDA FORMATADA//
function formartarMoeda(valor) {
    var valor = parseInt(valor);
    var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' });
    return valorFormatado;
}

    










