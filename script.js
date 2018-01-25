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
