function main() {
    //Constantes utilizadas para API
    const timestamp = "1622236132";
    const apiKey = "4b590ae37017608aa6ef3cad6c095129";
    const md5 = "ded8c31b1d0871eccfd7e33b5470d4d5";
    const url = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}`;

    //Chamando a API e pegando JSON
    fetch(url).then((response) => {
        return response.json();
    }).then((jsonParsed) => {
        //Dentro de onde eu chamo o JSON já insiro o que eu quero pegar dele pra mostrar
        const divHerois = document.getElementById("herois");

        jsonParsed.data.results.forEach(element => {
            const imagemHeroi = element.thumbnail.path + "." + element.thumbnail.extension;
            const nomeHeroi = element.name;
            const HQs = element.comics.items;
            createDiv(imagemHeroi, nomeHeroi, divHerois, HQs);
        });
    })
}

//Crio a função que vai definir as informações apresentadas
function createDiv(imagem, nome, div, HQs) {
    //Crio os elementos necessários
    const divHerois = document.createElement("div");
    const divHeroi = document.createElement("div");
    const img = document.createElement("img");
    const nm = document.createElement("text");
    let hq = document.createElement("text");

    img.src = imagem;
    img.className = "imagem";
    nm.textContent = nome;
    nm.className = "nome";
    hq.textContent = "HQs: ";
    let i = 0;
    while (i < HQs.length) {
        if (i == HQs.length - 1) {
            hq.textContent += `"${HQs[i].name}".`;
        } else {
            hq.textContent += `"${HQs[i].name}", `;
        }
        i++;
    }
    hq.className = "hq";

    divHeroi.appendChild(img);
    divHeroi.appendChild(nm);
    divHeroi.appendChild(hq);
    divHerois.appendChild(divHeroi);
    div.appendChild(divHerois);

    divHerois.classList.add("personagem");
}

main();