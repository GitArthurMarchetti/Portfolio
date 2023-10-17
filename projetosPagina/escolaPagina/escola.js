let areaVazia = document.getElementById("areaExplicacao");

function matematica(){
   if(areaVazia.innerHTML === "") {
    areaVazia.insertAdjacentHTML("afterbegin", `
    <div class="espacO">
    <div class="espacoAtv">
        <img src="../../imagens/imgemPonte.jpg" alt="" class="imagemAtv">
        <div class="areaTexto">
            <p class="tituloProjetos">Ponte de macarrão</p>
            <p class="descricaoAtv">Com palitos crus de macarrão, cola super-bonder e durepox, fizemos uma ponte para segurar pesos. Utilizamos do excel para fazer as contas de cada palito em cada parte da ponte. No final ficou como a da foto ao lado e segurou 3kg. <br> LINK: <a href="https://docs.google.com/spreadsheets/d/1KNAsdatrcAOCTIEeDCoCeNX85kGC6xSkc3HzNp2u3eE/edit?usp=sharing" target="_blank">Excel ponte de macarrão.</a></p>
        </div>
    </div>
</div>
<div class="espacoMatematica">
    <div class="espacoAtv">
        <img src="../../imagens/fotoIlustrativaMacaco.png" alt="" class="imagemAtv">
        <div class="areaTexto">
            <p class="tituloProjetos">Paper Craft</p>
            <p class="descricaoAtv">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                aperiam quidem, perferendis, aliquam sapiente neque illo vitae voluptatem deleniti facilis
                quaerat minima mollitia vel maxime veniam laboriosam ut est! Esse. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Deleniti unde alias voluptatum quis, optio dicta maxime
                saepe quam, veritatis nisi consectetur, voluptatem distinctio id nostrum dolore? Vel
                provident quas cumque?</p>
        </div>
    </div>
</div>
    ` )
   } else{
    areaVazia.innerHTML = "";
}
}

function humanas(){
    if(areaVazia.innerHTML === "") {
        areaVazia.insertAdjacentHTML("afterbegin",
        `  <div class="espacO">
        <div class="espacoAtv">
            <img src="../../imagens/fotoHumanasInfo.jpg" alt="" class="imagemAtv">
            <div class="areaTexto">
                <p class="tituloProjetos">Atividade Açorianos</p>
                <p class="descricaoAtv"> Fizemos um infografico sobre açorianos. <br> LINK: <a href="https://www.canva.com/design/DAFcbsUFdrE/Klg2rBscns6FL2vWXUODrA/edit?utm_content=DAFcbsUFdrE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Abrir o canva.</a></p>
            </div>
        </div>
    </div>
    <div class="espacO">
        <div class="espacoAtv">
            <img src="../../imagens/fotoMorroCruz.jpg" alt="" class="imagemAtv">
            <div class="areaTexto">
                <p class="tituloProjetos">Revolução industrial</p>
                <p class="descricaoAtv"> Fizemos um canva que mostra a evolução de um local, escolhemos o morro da cruz. <br> LINK: <a href="https://www.canva.com/design/DAFqNyjP55I/H5bwhRontekhZSl4ZXsQeQ/edit?utm_content=DAFqNyjP55I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Abrir o canva.</a></p>
            </div>
        </div>
    </div`
        )
}else{
    areaVazia.innerHTML = "";
}
}




function natureza(){
    if(areaVazia.innerHTML === "") {
        areaVazia.insertAdjacentHTML("afterbegin",
        ` <div class="espacO">
        <div class="espacoAtv">
            <img src="../../imagens/imagemZoo.jpg" alt="" class="imagemAtv">
            <div class="areaTexto">
                <p class="tituloProjetos">Cartaz - Zooeleição</p>
                <p class="descricaoAtv"> Grupos de todas as turmas da escola criram um animal para ser eleito a presidente da escola, o nosso foi esse macaco, infelizmente não ganhou as eleições. <br> LINK: <a href="../../imagens/imagemZoo.jpg" target="_blank">Abrir foto</a></p>
            </div>
        </div>
    </div>
    <div class="espacO">
        <div class="espacoAtv">
            <img src="../../imagens/imagemBraco.jpg" alt="" class="imagemAtv">
            <div class="areaTexto">
                <p class="tituloProjetos">Braço Hidráulico</p>
                <p class="descricaoAtv"> Com apenas papelão, seringas, água e muito esforço fizemos um braço que se move apenas com a força da água. <br> LINK: <a href="https://docs.google.com/document/d/1f-qz3GveGXXWn-RUjYN4HGfnFAVxRDL3HLeFa4A-tBY/edit?usp=sharing" target="_blank">Abrir relátorio</a></p>
            </div>
        </div>
    </div>
    <div class="espacO">
        <div class="espacoAtv">
            <img src="../../imagens/fotoInfografico.jpg" alt="" class="imagemAtv">
            <div class="areaTexto">
                <p class="tituloProjetos">Infográfico equilíbrio quimíco.</p>
                <p class="descricaoAtv"> Criei um infografico no Canva sobre equilíbrio quimíco. <br> LINK: <a href="https://www.canva.com/design/DAFsc9_RnZ4/a5Tqt6y0zyWh-YZ7TYEgvA/edit?utm_content=DAFsc9_RnZ4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Abrir relátorio</a></p>
            </div>
        </div>
    </div>`
        )
}
else{
    areaVazia.innerHTML = "";
}
}

function linguagens(){
    if(areaVazia.innerHTML === "") {
        areaVazia.insertAdjacentHTML("afterbegin",
}