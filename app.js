// app.js

function ir(categoria) {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento HTML selecionado no console.

    let paginaPesquisa = `
        <div class="item-resultado">
            <header> 
                <h1> Geração de ${categoria} </h1>
            </header>

            <main>
                <section>
                    <input type="text" name="busca" placeholder="Digite o nome da IA, sua função ou área de atuação" id="campo-pesquisa">
                    <button onclick="pesquisar('${categoria}')">Pesquisar</button> 
                </section>
            </main>

            <footer>
                <p>
                    2024 - IAs do Futuro. Todos os direitos reservados.
                </p>
                <p>
                    Entre em contato: exemplo@gmail.com
                </p>
            </footer>
        </div>
    `;

    section.innerHTML = paginaPesquisa;
}

function pesquisar(categoria) {
    let dados = [];
    if (categoria === 'Texto') {
        dados = dadosT;
    } else if (categoria === 'Imagem') {
        dados = dadosI;
    } else if (categoria === 'Áudio') {
        dados = dadosA;
    }

    console.log("clicou"); // Loga no console para confirmar que a função foi chamada.

    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento HTML selecionado no console.

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    console.log(campoPesquisa);

    if (campoPesquisa === "") {
        section.innerHTML = "Nada foi encontrado";
        return;
    }

    let resultados = "";

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <br>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
}


function voltarPaginaInicial() {
    const section = document.getElementById("resultados-pesquisa");

    const paginaInicial = `
        <div class="container">
            <div class="item-resultado">
                <h2>Geração de Textos</h2>
                <p class="descricao-meta">
                    descobra IA's que realizam tarefas relacionadas à geração ou análise de textos.
                </p>
                <br>
                <button onclick="ir('Texto')">Descobrir</button>
            </div>

            <div class="item-resultado">
                <h2>Geração de Imagem</h2>
                <p class="descricao-meta">
                    descobra IA's que realizam tarefas relacionadas à geração ou análise de imagens.
                </p>
                <br>
                <button onclick="ir('Imagem')">Descobrir</button>
            </div>

            <div class="item-resultado">
                <h2>Geração de Áudio</h2>
                <p class="descricao-meta">
                    descobra IA's que realizam tarefas relacionadas à geração ou análise de áudios
                </p>
                <br>
                <button onclick="ir('Áudio')">Descobrir</button>
            </div>
        </div>
    `;

    section.innerHTML = paginaInicial;
}