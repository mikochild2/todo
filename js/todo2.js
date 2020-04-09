//Add Item
$('input').keypress(function(event) {
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $('#list').append('<li>' + todoText + '<span><i class ="fa fa-trash"</i></span>'); 
    }
});

//Add category
$('select').keypress(function(event) {
    if(event.which === 13) {
        var listCat = $(this).val();
        $(this).val("");
        $('#nav').append('<li>' + listCat);
    }
});

//Remove Item
$('ul').on('click', "span", function() {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//Mark-through, grayout item
$('ul').on('click', 'li', function() {
    $(this).toggleClass('done');
})