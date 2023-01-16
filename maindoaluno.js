//Crie a varíavel 'SpeechRecognition' que recebe 'window.webkitSpeechRecognition;'
//O código 'window.webkitSpeechRecognition' é o código que inicializa a API, porém precisamos guardar essa API dentro de uma variável
???

//A variável recognition precisa criar uma nova API do Web Speech, então utilize o código 'new' e coloque a variável criada na primeira linha
var recognition = ???();

//Utilize o código que pega o TextBox do html e guarde dentro de uma vaiável
var Textbox = ???; 

function start()
{
    //Sempre que o botão iniciar é pressionado, queremos que a área de texto fique vazia. 
    //Para isso, estamos atualizando a textarea com um valor vazio. Quando alteramos o conteúdo html, qual código utilizamos?

    Textbox.??? = "";
    //Utilize a função started na variavel recognition para a API iniciar
    
    recognition.???();
} 
//A função 'onresult' tem todos os valores da fala convertidos em texto
//por tanto, para obter esse texto convertido de onresult, precisamos escrever um código
//como esse:
recognition.??? = function(event) {
console.log(event); 

//O código 'var Content = event.results[0][0].transcript;'
//tem nossa saída de voz para texto, portanto, vamos armazená-la dentro de uma variável
???
//Agora exiba essa variável na teça e no console
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
        //5000 para 5 segundos
        //1000 para 1 segundo
    }, ????);
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
