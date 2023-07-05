const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let val = document.getElementById('textbox')
    let x = val.value.toString();
    const speech = new SpeechSynthesisUtterance(x);
    window.speechSynthesis.speak(speech);

});