function verificarSenhaERedirecionar() {
    var senhaDigitada = document.getElementById('senha').value;
    var senhaHash = CryptoJS.MD5(senhaDigitada).toString();

    if (senhaHash === "e8d95a51f3af4a3b134bf6bb680a213a") { // Hash para "senha"
        window.location.href = "home.html";
    } else {
        alert("Erro: Senha incorreta. Tente novamente.");
    }
}

function verificarTecla(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita a submissão do formulário por padrão
        verificarSenhaERedirecionar();
    }
}
