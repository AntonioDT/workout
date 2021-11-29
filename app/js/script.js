$(document).ready(function() {
    console.log("Hello!")
});

function removeCard(element) {
    let ul = $('.cards-list');
    let footer = $(element).parent();
    let card = footer.parent();
    let parent = card.parent();
    
    parent.addClass("remove");
    setTimeout(() => {
        parent.remove();
    }, 500);
}