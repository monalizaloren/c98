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
};

function speak(){
    var synth = window.speechSynthesis;
    //A voz da API irá falar 'Tirando sua selfie em 5 segundos', 
    //Utilize o código 'speak_data' para isso
    ??? = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    //Anexe a variável 'Webcam' na camera
    ????.attach(camera);

    
    //Declare a função 'setTimeOut, pois ela define o tempo em que a imagem será tirada e salva
    ???(function()
    { 
        take_selfie(); 
        //Coloque o nome da função que salva a imagem
        ???();
        //Defina em quantos milisegundos a foto será tirada
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    //Defina a largura e altura da camera
    ???:360,
    ???:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
    Webcam.snap(function(data_uri) {
        //Utilize o código que altera o HTML, pois você quer ver a imagem na tela
        document.getElementById("result").??? = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
