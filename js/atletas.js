document.addEventListener("DOMContentLoaded", function () {
    const botaofeminino = document.getElementById("exibirFeminino");
    const botaomasculino = document.getElementById("exibirMasculino");
    const botaotodos = document.getElementById("exibirtodos");

    // Adicione manipuladores de evento aos botões
    botaofeminino.addEventListener("click", () => gerarseleção("feminino"));
    botaomasculino.addEventListener("click", () => gerarseleção("masculino"));
    botaotodos.addEventListener("click", () => gerarseleção("all"));

    // Função para carregar o elenco com base no gênero
    function gerarseleção(genero) {
        const seleçãocontainer = document.getElementById("elenco");
        seleçãocontainer.innerHTML = ''; // Limpar conteúdo

        // Fazer uma solicitação para a API externa com base no gênero
        fetch(`https://botafogo-atletas.mange.li/${genero}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(jogador => {
                    const figurinhajogador = document.createElement('div');
                    figurinhajogador.className = 'atleta-card';

                    const fotojogador = document.createElement('img');
                    fotojogador.className = 'atleta-img';
                    fotojogador.src = jogador.imagem;

                    // Adiciona evento de clique na imagem do atleta para redirecionar
                    fotojogador.addEventListener('click', function() {
                        // Redirecionar para a página do atleta com o ID na query string
                        window.location.href = `atletas_totais.html?id=${jogador.id}`;
                    });

                    const detalhesAtleta = document.createElement('div');
                    detalhesAtleta.className = 'atleta-detalhes';
                    detalhesAtleta.innerHTML = `
                        <p>Clique na imagem e veja mais!</p>
                    `;

                    figurinhajogador.appendChild(fotojogador);
                    figurinhajogador.appendChild(detalhesAtleta);

                    seleçãocontainer.appendChild(figurinhajogador);
                });
            })
            .catch(error => {
                console.error(`Erro ao buscar elenco ${genero}:`, error);
            });
    }
});
