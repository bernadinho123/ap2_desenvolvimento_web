document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filtro-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => gerarSelecao(button.dataset.gender));
    });

    function gerarSelecao(genero) {
        const selecaoContainer = document.getElementById("elenco");
        selecaoContainer.innerHTML = ''; // Limpar conteúdo

        fetch(`https://botafogo-atletas.mange.li/${genero}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(jogador => {
                    const figurinhaJogador = document.createElement('div');
                    figurinhaJogador.className = 'atleta-card';

                    const fotoJogador = document.createElement('img');
                    fotoJogador.className = 'atleta-img';
                    fotoJogador.src = jogador.imagem;
                    fotoJogador.addEventListener('click', () => {
                        window.location.href = `atletas_totais.html?id=${jogador.id}`;
                    });

                    const detalhesAtleta = document.createElement('div');
                    detalhesAtleta.className = 'atleta-detalhes';
                    detalhesAtleta.innerHTML = `<p>Clique na imagem e veja mais!</p>`;

                    figurinhaJogador.appendChild(fotoJogador);
                    figurinhaJogador.appendChild(detalhesAtleta);

                    selecaoContainer.appendChild(figurinhaJogador);
                });
            })
            .catch(error => {
                console.error(`Erro ao buscar elenco ${genero}:`, error);
            });
    }
});
