var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) 
{

    console.log(Event);

    var Content = event.results[0] [0].transcript;
    console.log(Content);


    document.getElementById("textbox").innerHTML = Content;

    if(Content =="take my selfie")
{
    console.log("taking my selfie --- ");
    speak();
}
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    var Utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(Utterthis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save()
    }, 5000);
}

Webcam.set({
    width:360,
    height250,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}


function save()
{
    link = document.getElementById("link");
    Image = document.getElementById("selfie_image").src;
    link.href = Image;
    link.click();
}