document.addEventListener("DOMContentLoaded", function () {
    const detalhesAtleta = document.getElementById("detalhesAtleta");
    const imagemAtleta = document.getElementById("imagemAtleta");
    const nomeAtleta = document.getElementById("nomeAtleta");
    const posicaoAtleta = document.getElementById("posicaoAtleta");
    const alturaAtleta = document.getElementById("alturaAtleta");
    const nascimentoAtleta = document.getElementById("nascimentoAtleta");

    const params = new URLSearchParams(window.location.search);
    const atletaId = params.get('id'); // ID do atleta presente na URL

    // Função para buscar os detalhes do atleta de uma API
    function buscarDetalhesAtletaPorId(id) {
        // Exemplo de utilização de fetch para uma API fictícia de atletas
        fetch(`https://botafogo-atletas.mange.li/${id}`)
            .then(response => response.json())
            .then(atleta => {
                // Atualiza os detalhes do atleta na página com base nos dados recebidos
                imagemAtleta.src = atleta.imagem;
                nomeAtleta.textContent = `Nome: ${atleta.nome}`;
                posicaoAtleta.textContent = `Posição: ${atleta.posicao}`;
                alturaAtleta.textContent = `Altura: ${atleta.altura}`;
                nascimentoAtleta.textContent = `Nascimento: ${atleta.nascimento}`;
            })
            .catch(error => {
                console.error('Erro ao buscar detalhes do atleta:', error);
                detalhesAtleta.innerHTML = "<p>Erro ao buscar detalhes do atleta.</p>";
            });
    }

    // Chama a função para buscar os detalhes do atleta com base no ID
    buscarDetalhesAtletaPorId(atletaId);
});