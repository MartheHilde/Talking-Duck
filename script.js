//Bring in HTML elements.
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigures = document.querySelector('figure');

//Get the text from the text area
//Make the duck speak if button is clicked
function onButtonClick() {
    if (textArea.value.length > 0) {
        speak()
    }
}

function speak() {
    const text = textArea.value;
    const utterance = new SpeechSynthesisUtterance(text)

    utterance.pitch = pitchBar.value;
    speechSynthesis.speak(utterance);

    utterance.addEventListener('start', function() {
        playButton.disabled = true;
        textArea.disabled = true;
        pitchBar.disabled = true;
        duckFigures.classList.add('talking');
    })

    utterance.addEventListener('end', function() {
        playButton.disabled = false;
        textArea.disabled = false;
        pitchBar.disabled = false;
        duckFigures.classList.remove('talking');
    })
}
//Tell button to do something when clicked

playButton.addEventListener('click', onButtonClick);