$.fn.grandparent = function(){
    var el = $( this ).parent().parent();
    return el;
}

$.fn.greatGrandparent = function(){
    var el = $( this ).parent().parent().parent();
    return el;
}