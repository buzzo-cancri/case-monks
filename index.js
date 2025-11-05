// Carrega números aleatórios nas caixas de verificação do
// formulário assim que a página carrega.
function loadNumbers() {
    numbers = document.getElementsByClassName('num');

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].innerText = Math.floor(Math.random()*1000).toString();
    }

}

// Ao clicar no botão de envio do formulário, a resposta do
// usuário é validada pela soma dos números exibidos e só então
// o formulário é enviado.
// Caso a soma esteja errada, um alerta é exibido.
function validate() {
    numbers = document.getElementsByClassName('num');
    answer = document.getElementById('answer').value;

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i].innerText);
    }

    if (sum === parseInt(answer)) {
        document.monksForm.submit();
    } else {
        alert('Incorreto!');
    }
}
