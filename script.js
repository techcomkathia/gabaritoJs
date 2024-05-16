

async function getTexto(url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Ocorreu um erro ao obter o texto da URL:', error);
        return null;
    }
}

async function montarLista( url, separador){
    const texto = await getTexto(url);
    if (texto) {
        const regex = new RegExp(`${separador}\\n?`, "g");
        let lista = texto.split(regex);
        return lista
    }
}


//'https://raw.githubusercontent.com/techcomkathia/gabaritosLogicaJs/main/arquivosGabaritos/aula01/quest1.js'
async function montarEstruturaHTML(url){
    let lista = await montarLista(url, '//£')
    let questoes = document.getElementById(`questoes`)

    //laço
    let enunciado = lista[0]
    let resposta =  lista[1]

    let questao = document.createElement('li')
    questao.innerHTML = `
    <li class="list-group-item" id="textoQ1"> 
        ${enunciado}
        <br>
        <button class="btn btn-dark ms-2" onclick="mostrarResposta('q1')">Resposta</button>
    </li> 
    <div id="q1" class="resposta d-none ">
        <pre>
            <code>
            ${resposta}
            </code>
        </pre>             
    </div> 
    `
    questoes.appendChild(questao)
   
}

montarEstruturaHTML('https://raw.githubusercontent.com/techcomkathia/gabaritoJs/main/arquivosAula02/atividade01.js')

function mostrarResposta(id) {
    let divResposta = document.querySelector(`#${id}`);
    divResposta.classList.remove('d-none');
}