$.fn.grandparent = function(){
    var el = $( this ).parent().parent();
    return el;
}

$.fn.greatGrandparent = function(){
    var el = $( this ).parent().parent().parent();
    return el;
}

$.fn.cousins = function(){
    var el = $( this ).parent().siblings().children();
    return el;
};
