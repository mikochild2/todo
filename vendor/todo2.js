//Add Item
$('input').keypress(function(eventt) {
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append('<li>' + todoText + '<span><i class ="fa fa-trash"</i></span>'); 
    }
});

//Remove Item
$('ul').on('click', "span", function() {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//Mark-through, fade item
$('ul').on('click', 'li', function() {
    $(this).toggleClass('done');
})