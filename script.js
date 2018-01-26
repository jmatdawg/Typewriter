
var sentences = ["ten ate neite ate nee enet ite ate inet ent eate", 
"Too ato too nOt enot one totA not anot tOO aNot", 
"oat itain oat tainnate eate tea anne inant nean", 
"itant eate anot eat nato inate eatanot tain eat", 
"nee ene ate ite tent tiet ent ine ene ete ene ate"];


let sentenceContainer = $('#sentence');
let sentenceCounter = 0;

let splitSentence = sentences.map((sentence) => {
    return sentence.split(" ");
})
const configuredSentence = splitSentence.map((character, index) => {
    return `<span id="target-${index}">${character}</span>`;
}).join('');

sentenceContainer.append(sentences);

$(document).ready(() => {
    $('#keyboard-upper-container').hide();
    })

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
})
$(document).bind("keyup", (e) => {
    $('#' + (e.keyCode)).css("background-color", "");
});
$(document).bind("keydown", (e) => {
    $('#' + (e.keyCode + 32)).css("background-color", "yellow");
})
$(document).bind("keyup", (e) => {
    $('#' + (e.keyCode + 32)).css("background-color", "");
})
$(document).bind("keydown", (e) => {
    $('#32' + (e.keyCode)).css("background-color", "yellow");
})
$(document).bind("keyup", (e) => {
    $('#32' + (e.keyCode)).css("background-color", "");
})





//create a sentence counter to switch out sentence
// document.on('keypress'), (e) =>{}
