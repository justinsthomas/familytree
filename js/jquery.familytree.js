$.fn.grandparent = function(){
    var el = $( this ).parent().parent();
    return el;
}