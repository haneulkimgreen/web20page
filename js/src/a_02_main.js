(function($){

var but = $('.gnb_01');
var button = but.children('button');
var menu = $('#menu');
button.on('click', function(event){
    menu.css({display:'block'});

});

})(this.jQuery);