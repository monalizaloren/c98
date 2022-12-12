//Crie a varíavel 'SpeechRecognition' que recebe 'window.webkitSpeechRecognition;'
//O código 'window.webkitSpeechRecognition' é o código que inicializa a API, porém precisamos guardar essa API dentro de uma variável
???

//A variável recognition precisa criar uma nova API do Web Speech, então utilize o código 'new' e coloque a variável criada na primeira linha
var recognition = ???();

//No html, você tem um elemento que se chama 'textarea', nele aparecerá o texto que a API reconheceu
//Guarde esse texto dentro da variável Textbox
var Textbox = ???; 

function start()
{
    //Sempre que o botão iniciar é pressionado, queremos que a área de texto fique vazia. 
    //Para isso, estamos atualizando a textarea com um valor vazio. Quando alteramos o conteúdo html, qual código utilizamos?

    Textbox.??? = ""; 
    // Essa função start é um função prefedinida do API Web speech e irá iniciar
    //a conversão de fala para texto
    recognition.???();
} 
//A função 'onresult' tem todos os valores da fala convertidos em texto
//por tanto, para obter esse texto convertido de onresult, precisamos escrever um código
//como esse:
recognition.??? = function(event) {
//Exiba esse evento no console
 ???

//O código 'var Content = event.results[0][0].transcript;'
//tem nossa saída de voz para texto, portanto, vamos armazená-la dentro de uma variável
???
//Agora exiba essa variável
    Textbox.innerHTML = ???;
    console.log(???);

//Programe 'Se conteúdo for igual a 'tire minha selfie', aconteça a função 'speak'

     ????
}


