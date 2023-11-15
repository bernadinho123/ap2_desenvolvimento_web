function gerarSelecao(genero) {
    const selecaoContainer = document.getElementById("elenco");
    selecaoContainer.innerHTML = ''; // Limpar conteúdo

    const filtroSelecao = document.getElementById('filtro-selecao');
    const generoSelecionado = genero || filtroSelecao.value;

    fetch(`https://botafogo-atletas.mange.li/${generoSelecionado}`)
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

            // Mostrar o conteúdo após buscar e criar os elementos
            selecaoContainer.style.display = 'block';
        })
        .catch(error => {
            console.error(`Erro ao buscar elenco ${generoSelecionado}:`, error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filtro-btn");
    const filtroSelecao = document.getElementById('filtro-selecao');

    buttons.forEach(button => {
        button.addEventListener("click", () => gerarSelecao(button.dataset.gender));
    });

    filtroSelecao.addEventListener('change', () => gerarSelecao());

    // Inicialmente, ocultar o conteúdo
    const selecaoContainer = document.getElementById("elenco");
    selecaoContainer.style.display = 'none';

    // Lógica para alternar entre os botões e o botão de seleção
    window.addEventListener('resize', function() {
        var larguraTela = window.innerWidth;

        if (larguraTela <= 768) {
            // Se a tela for menor ou igual a 768px, mostrar o botão de seleção e ocultar os botões
            buttons.forEach(button => {
                button.style.display = 'none';
            });
            filtroSelecao.style.display = 'inline-block';
        } else {
            // Se a tela for maior que 768px, mostrar os botões e ocultar o botão de seleção
            buttons.forEach(button => {
                button.style.display = 'inline-block';
            });
            filtroSelecao.style.display = 'none';
        }
    });

    // Disparar o evento de redimensionamento ao carregar a página para definir inicialmente a exibição correta
    window.dispatchEvent(new Event('resize'));
});
