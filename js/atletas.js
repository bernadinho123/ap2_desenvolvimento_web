// Obtém as divs de elenco feminino e masculino (se existirem)
const divElencoFeminino = document.getElementById("lista_imagens_feminino");
const divElencoMasculino = document.getElementById("lista_imagens_masculino");

const elementosElenco = [divElencoFeminino, divElencoMasculino];

jogadores.forEach(jogador => {
    const divElenco = document.createElement('div');
    divElenco.className = 'jogador';
    
    divElenco.innerHTML = `
        <img src="${jogador.imagem}" style="width: 95%;">
        <p style="font-weight: bolder">${jogador.nome}</p>
    `;

    for (let key in jogador) {
        divElenco.dataset[key] = jogador[key];
    }

    // Verifica se a div de elenco (divElencoFeminino ou divElencoMasculino) existe e a utiliza se disponível
    elementosElenco.forEach(elemento => {
        if (elemento && jogador.elenco === elemento.id.split('_')[2]) {
            elemento.appendChild(divElenco);

            divElenco.addEventListener('click', (evento) => {
                const divJogador = evento.currentTarget;

                for (let key in jogador) {
                    localStorage.setItem(key, divJogador.dataset[key]);
                }

                window.location.href = "./detalhes.html";
            });
        }
    });
});
