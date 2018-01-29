let letterCounter = 0;
let sentenceCounter = 0;
let targetKeyCode;
let sentences = ["ten ate neite ate nee enet ite ate inet ent eate", 
"Too ato too nOt enot one totA not anot tOO aNot", 
"oat itain oat tainnate eate tea anne inant nean", 
"itant eate anot eat nato inate eatanot tain eat", 
"nee ene ate ite tent tiet ent ine ene ete ene ate"];

let splitSentence = sentences.map((sentence) => {
    return sentence.split("").map((character, index) => {
        return `<span id="target-${index}">${character}</span>`;
    }).join('');
})

$(document).ready(() => {
    $('#keyboard-upper-container').hide();

    let sentenceContainer = $('#sentence');
$(document).keydown( (e) => {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }})
$(document).keyup( (e) => {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }})

$(document).bind("keydown", (e) => {
    $('#' + (e.keyCode)).css("background-color", "yellow");
});
$(document).bind("keyup", (e) => {
    $('#' + (e.keyCode)).css("background-color", "");
});
$(document).bind("keydown", (e) => {
    $('#' + (e.keyCode + 32)).css("background-color", "yellow");
});
$(document).bind("keyup", (e) => {
    $('#' + (e.keyCode + 32)).css("background-color", "");
});
$(document).bind("keydown", (e) => {
    $('#32' + (e.keyCode)).css("background-color", "yellow");
});
$(document).bind("keyup", (e) => {
    $('#32' + (e.keyCode)).css("background-color", "");
});
console.log(splitSentence[0]);
console.log($("#sentence"));

const configuredSentence = splitSentence.map((character, index) => {
    return `<span id="target-${index}">${character}</span>`;
}).join('');

sentenceContainer.append(sentences[0]);

let sentence = sentences[sentenceCounter];
//sentenceContainer.empty();

configureTargetLetter = () => {
    let targetLetter = $(`#target-${letterCounter}`);
        if (letterCounter !==0) {
            $(`#target-${letterCounter}` - 1).css("background-color", "");
        }
targetKeyCode = targetLetter.text().charCodeAt(0);
targetLetter.css("background-color", "yellow");   

}
});