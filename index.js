var navigations = [
    {word: "home", page: "index.html"},
    {word: "contact", page: "contact.html"},
    {word: "about", page: "about.html"}
];
function navigate(){
    var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.continous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = 'en-US'
    recognition.start();

    recognition.onresult = function(event){
        let userWord = event.results[0][0].transcript;
        // let index = navigations.findIndex(n => n.word == userWord)
        // to make it linient
        let index = navigations.findIndex(n => userWord.includes(n.word));
        window.location.href = navigations[index].page;
    }

    recognition.onspeechend = function(){
        recognition.stop();
    }
}
