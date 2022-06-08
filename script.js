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
    fechar();
}
















