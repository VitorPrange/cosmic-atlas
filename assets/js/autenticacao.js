function verificarSenha(event) {
    const senha = prompt("Senha: ")
    if (senha == 9) {
        window.location.href = "dashboard.html";
    } else {
        alert("vaza daqui rato")
    }
}