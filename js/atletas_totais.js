document.addEventListener("DOMContentLoaded", function () {
    const detalhesAtleta = document.getElementById("detalhesAtleta");
    const imagemAtleta = document.getElementById("imagemAtleta");
    const nomeAtleta = document.getElementById("nomeAtleta");
    const posicaoAtleta = document.getElementById("posicaoAtleta");
    const alturaAtleta = document.getElementById("alturaAtleta");
    const nascimentoAtleta = document.getElementById("nascimentoAtleta");
    const historiaAtleta = document.getElementById("historiaAtleta");
    const voltar = document.getElementById("volta");
    voltar.addEventListener("click", () => {
        window.location.href = `home.html`;
    });


    const params = new URLSearchParams(window.location.search);
    const atletaId = params.get('id'); // ID do atleta presente na URL
    const validado = localStorage.getItem('validado');

    if (!validado || validado !== 'vasco') {
        document.getElementById("validacao").style.display = 'block';
        document.getElementById("detalhesAtleta").style.display = 'none';
    
        document.getElementById("volta").addEventListener("click", () => {
            localStorage.removeItem('validado');
            window.location.href = 'index.html';
        });
    }
    
    // Função para buscar os detalhes do atleta de uma API
    function buscarDetalhesAtletaPorId(id) {
        if (id > 60) {
            // ID maior que 60, exibe um erro grande na página
            detalhesAtleta.innerHTML = "<p id = acabate>Erro: ID não encontrado. Não é possível buscar detalhes do atleta.</p>";
            return;
        }
    
        // Exemplo de utilização de fetch para uma API fictícia de atletas
        fetch(`https://botafogo-atletas.mange.li/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição. Código de status: ${response.status}`);
                }
                return response.json();
            })
            .then(atleta => {
                // Atualiza os detalhes do atleta na página com base nos dados recebidos
                imagemAtleta.src = atleta.imagem;
                nomeAtleta.textContent = `Nome: ${atleta.nome}`;
                historiaAtleta.textContent = `Historia: ${atleta.descricao}`;
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