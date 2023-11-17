function verificarSenhaERedirecionar() {
    var senhaDigitada = document.getElementById('vasco').value;
    var senhaHash = CryptoJS.MD5(senhaDigitada).toString();

    if (senhaHash === "1b4543f0bacad537da30517cd15dbb22") {
         localStorage.setItem('validado','vasco');
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
