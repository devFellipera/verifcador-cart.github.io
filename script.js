function processForm() {
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const card = document.getElementById('card').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    let responseMessage = '';

    if (name && cpf && card && expiry && cvv) {
        // Simulação de verificação de clonagem
        if (isCardCloned(card)) {
            responseMessage = 'O cartão foi clonado.';
        } else {
            responseMessage = 'O cartão não foi clonado.';
        }
    } else {
        responseMessage = 'Por favor, preencha todos os campos corretamente.';
    }

    document.getElementById('response').innerText = responseMessage;
}

function isCardCloned(card) {
    // Simulação simples: cartões que começam com '1234' são considerados clonados
    // Isto é apenas um exemplo; substitua isso por uma verificação real se disponível.
    return card.startsWith('1234');
}
