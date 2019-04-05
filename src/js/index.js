
let FONT_SIZE_MIN_RANGE = 12;
let FONT_SIZE_MAX_RANGE = 32;

let nbPika = -1;

$(".contentAccordion").hide()

updateNbPika();
$("#pikaButton").click(updateNbPika);

function updateNbPika() {
    nbPika++;
    let randFontSize = getRandomIntInclusive(FONT_SIZE_MIN_RANGE, FONT_SIZE_MAX_RANGE);
    $("#pikapika").css("font-size", randFontSize);
    $("#pikapika").text("Pika Pika");
    $("#nbPika").text(nbPika);
}

let accordion = $("#accordion")


$("#accordion").click(function () {
    // $(".contentAccordion").toggle();
    $(".contentAccordion").animate({
        left: "+=50",
        height: "toggle"
    });
});

