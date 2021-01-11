// procurar o (id do)botão   //o botão não está funcionando. concertar depois. 

document.querySelector("#add-time")

//quando clicar no botão 

.addEventListener('click', cloneField) //vai ouvir o evento click para poder executar uma ação. e a ação é clone field. uma ação q n existe. então a ação terá de ser criada 

//executar uma ação
Function cloneField() {
    //Duplicar os campos. que campos?  
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
        //pegar os campos: que campos? 
    const fields = newFieldContainer.querySelectorAll('input')
        //para cada campo, limpar 

    fields.forEach(function(field) {
        //pega o field do momento e limpa ele 
        field.value = ""
    })

    //colocar na página: onde? 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

//para criar uma ação eu uso o function coloco o nome da função e abro e fecho o parentes pq isso faz parte da sintaxe da linguagem e aí dentro dos colchetes eu posso colocar qqr interação.//nesse caso eu peguei o campo que eu quero duplicar e coloquei a funcionalidade "cloneNode".(Dica: No js eu sempre vou usar "node para me referir a elementos ou tags HTML") se demtro do cloneNode, eu colocar true, ele vai pegar tudo oq tem dentro da div "schedule-item", mas se eu colocar false, ele vai pegar só a div vazia. eu transformei o campo na variavel constante "fields"