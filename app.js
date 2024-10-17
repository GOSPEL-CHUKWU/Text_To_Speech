let convert = document.querySelector(".convert");
let textarea = document.querySelector(".textarea");

let speech = new SpeechSynthesisUtterance();

convert.addEventListener("click", () => {
  function settingSpeech() {
    return new Promise(function (resolve) {
      let voicesArray = window.speechSynthesis;
      let runningInterval = setInterval(() => {
        if (voicesArray.getVoices().length !== 0) {
          voicesArray.getVoices()[0].default = false;
          voicesArray.getVoices()[5].default = true;
          resolve(voicesArray.getVoices());
          clearInterval(runningInterval);
        }
      }, 10);
    });
  }

  let setSpeech = settingSpeech();
  setSpeech.then((voices) => {
    console.log(voices);
    speech.voice = voices[5];
    speech.text = textarea.value;
    speech.pitch = 1;
    speech.volume = 1;
    speech.lang = "en-US";
    speech.rate = 1;
    speechSynthesis.speak(speech);
  });
});
